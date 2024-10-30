import prisma from "@/app/lib/prismadb";
export async function GET(request) {
  const users = prisma.user.findMany();
  return new Response(JSON.stringify({ data: users }), {
    status: 200,
  });
}

export async function POST(req,res) {
  return new Response(JSON.stringify({ data: "Hello, Next.js! POST" }), {
    status: 200,
  });
}

