import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to get the local leads path
const getLeadsPath = () => {
  return path.join(process.cwd(), "data", "leads.json");
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, businessName, service } = data;

    const lead = {
      id: Date.now().toString(),
      name: name || "Anonymous",
      businessName: businessName || "N/A",
      service: service || "General Inquiry",
      timestamp: new Date().toISOString(),
    };

    try {
      const leadsPath = getLeadsPath();
      const dir = path.dirname(leadsPath);
      
      // Attempt to save to filesystem (works locally, fails on Vercel)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      let leads = [];
      if (fs.existsSync(leadsPath)) {
        const fileContent = fs.readFileSync(leadsPath, "utf-8");
        leads = JSON.parse(fileContent);
      }
      
      leads.push(lead);
      fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2));
    } catch (fsError) {
      // Silently fail FS operations for Vercel compatibility
      console.warn("Filesystem save failed (expected on Vercel):", fsError);
    }

    // Always return success so the frontend can redirect to WhatsApp
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("API error:", error);
    // Still return success to prevent blocking the user
    return NextResponse.json({ success: true });
  }
}

export async function GET() {
  try {
    const leadsPath = getLeadsPath();
    if (fs.existsSync(leadsPath)) {
      const fileContent = fs.readFileSync(leadsPath, "utf-8");
      return NextResponse.json(JSON.parse(fileContent));
    }
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json([]);
  }
}
