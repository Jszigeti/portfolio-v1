import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      cover_url: true,
      description: true,
      stacks: true,
      features: true,
      project_link: true,
      repo_link: true,
    },
  });

  try {
    await prisma.project.findMany();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
