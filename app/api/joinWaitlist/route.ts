import { db } from "@/db";
import { NextResponse } from "next/server";
import { emails } from "@/db/schema";
import type { ExecutedQuery } from "@planetscale/database";

type Body = {
  email: string;
};

export async function POST(request: Request) {
  const body: Body = await request.json();
  try {
    await db.insert(emails).values({ email: body.email ?? "hi@me" });
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Something went wrong", { status: 500 });
  }

  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
