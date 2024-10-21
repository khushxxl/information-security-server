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
  return (
    <div className="flex h-screen flex-col w-full justify-center items-center">
      <h1 className="text-3xl mt-5 font-semibold">
        nice try, you wont be able to crack it
      </h1>
    </div>
  );
}
