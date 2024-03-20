import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const data = await request.json();
    await prisma.userData.create({data})
    return NextResponse.json({})
}