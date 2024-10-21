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
      return new Response("#ffc0cb", {
        status: 200,
      });
    }
    const generateRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color;
      do {
        color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
      } while (color === "#ffc0cb");
      return color;
    };

    const randomColor = generateRandomColor();
    return new Response(randomColor, {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
