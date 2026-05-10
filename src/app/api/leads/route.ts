import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SHARED_LEADS_PATH = "/home/team/shared/leads.json";

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

    let leads = [];
    if (fs.existsSync(SHARED_LEADS_PATH)) {
      try {
        const fileContent = fs.readFileSync(SHARED_LEADS_PATH, "utf-8");
        leads = JSON.parse(fileContent);
      } catch (e) {
        console.error("Error parsing leads file:", e);
        leads = [];
      }
    }

    leads.push(lead);
    
    // Ensure the directory exists (it should, but just in case)
    const dir = path.dirname(SHARED_LEADS_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(SHARED_LEADS_PATH, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (fs.existsSync(SHARED_LEADS_PATH)) {
      const fileContent = fs.readFileSync(SHARED_LEADS_PATH, "utf-8");
      return NextResponse.json(JSON.parse(fileContent));
    }
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
