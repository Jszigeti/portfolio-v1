import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      cover: true,
      imgs: true,
      desc: true,
      stacks: true,
      feat: true,
      link: true,
    },
  });

  return NextResponse.json({ projects }, { status: 200 });
}
