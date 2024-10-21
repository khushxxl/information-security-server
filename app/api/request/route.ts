// /app/api/mac/route.js

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

const allowedMacAddrs = ["08:97:98:b2:7e:83"];

export async function GET(request: Request) {
  try {
    const url = new URL(request.url); // Parse the URL
    const macAddress: any = url.searchParams.get("color");
    console.log(url, macAddress);

    // Get MAC addresses from Firebase
    const macRef = collection(db, "mac_addresses");
    const querySnapshot = await getDocs(macRef);
    const allowedMacAddrs = querySnapshot.docs.map(
      (doc) => doc.data().mac_address
    );

    if (allowedMacAddrs.includes(macAddress)) {
      return new Response(
        JSON.stringify({ date: new Date().toTimeString(), mujhe: "ishq" }),
        {
          status: 200,
        }
      );
    }
    const randomText = Math.random().toString(36).substring(2, 15);
    return new Response(
      JSON.stringify({
        [`random${Math.random()
          .toString(36)
          .substring(2, 7)}`]: `${randomText}`,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
