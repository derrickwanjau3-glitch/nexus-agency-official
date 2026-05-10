import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

    const filePath = path.join(process.cwd(), "data", "leads.json");
    
    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    let leads = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      leads = JSON.parse(fileContent);
    }

    leads.push(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "leads.json");
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return NextResponse.json(JSON.parse(fileContent));
    }
    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}
