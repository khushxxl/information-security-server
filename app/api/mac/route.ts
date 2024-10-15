// /app/api/mac/route.js

const allowedMacAddrs = ["08:97:98:b2:7e:83"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const macAddress = body.mac_address;

    if (allowedMacAddrs.includes(macAddress)) {
      return Response.json({ approval: true });
    }
    return Response.json({ approval: false });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
