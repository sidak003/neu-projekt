import { db } from "@/db";
import { NextResponse } from "next/server";
import { emails } from "@/db/schema";

type Body = {
  email: string;
};

export async function POST(request: Request) {
  const body: Body = await request.json();
  const res = await db.insert(emails).values({ email: body.email ?? "hi@me" });
  return NextResponse.json({ res });
}
