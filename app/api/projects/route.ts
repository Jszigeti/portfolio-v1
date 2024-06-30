import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      cover_url: true,
      medias_url: true,
      description: true,
      stacks: true,
      objectives: true,
      link: true,
      slug: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  try {
    await prisma.project.findMany();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
