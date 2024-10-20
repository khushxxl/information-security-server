"use client";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import toast from "react-hot-toast";
export default function Home() {
  const [enteredText, setenteredText] = useState("");

  const add_mac_address = async () => {
    // Check if the MAC address already exists
    const macRef = collection(db, "mac_addresses");
    const querySnapshot = await getDocs(
      query(macRef, where("mac_address", "==", enteredText))
    );

    if (querySnapshot.empty) {
      await addDoc(macRef, {
        mac_address: enteredText,
      }).then(() => {
        toast.success("Mac address added");
        setenteredText("");
      });
    } else {
      // MAC address already exists, handle accordingly (e.g., show an error message)
      toast.error("MAC address already exists");
      // You might want to set an error state or show a notification to the user here
    }
  };

  return (
    <div className="flex h-screen flex-col w-full justify-center items-center">
      <h1 className="text-3xl mt-5 font-semibold">
        add your mac address to verfify
      </h1>
      <div className="flex space-x-3 mt-10">
        <input
          onChange={(e: any) => setenteredText(e.target.value)}
          className="w-[300px] rounded-lg text-black px-4"
          type="text"
        />
        <button
          onClick={add_mac_address}
          className="bg-white text-black p-2 rounded-lg px-4"
        >
          Add
        </button>
      </div>
    </div>
  );
}
