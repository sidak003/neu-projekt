import { db } from "@/db";
import { emails } from "@/db/schema";

type Body = {
  email: string;
};

export async function POST(request: Request) {
  const { email }: Body = await request.json();
  try {
    await db.insert(emails).values({ email: email });
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
