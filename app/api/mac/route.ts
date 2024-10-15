// /app/api/mac/route.js

const allowedMacAddrs = ["08:97:98:b2:7e:83"];

export async function GET(request: Request) {
  try {
    const url = new URL(request.url); // Parse the URL
    const macAddress: any = url.searchParams.get("mac_address");
    console.log(url, macAddress);

    if (allowedMacAddrs.includes(macAddress)) {
      return new Response(JSON.stringify({ approval: true }), {
        status: 200,
      });
    }
    return new Response(JSON.stringify({ approval: false }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
