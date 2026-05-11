import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Function to get the local leads path relative to the project root
const getLeadsPath = () => {
  return path.join(process.cwd(), "data", "leads.json");
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, businessName, service } = data;

    if (!name || !businessName || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const lead = {
      id: Date.now().toString(),
      name,
      businessName,
      service,
      timestamp: new Date().toISOString(),
    };

    const leadsPath = getLeadsPath();
    let leads = [];

    // Ensure the data directory exists
    const dir = path.dirname(leadsPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(leadsPath)) {
      try {
        const fileContent = fs.readFileSync(leadsPath, "utf-8");
        leads = JSON.parse(fileContent);
      } catch (e) {
        console.error("Error parsing leads file:", e);
        leads = [];
      }
    }

    leads.push(lead);
    fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
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
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
