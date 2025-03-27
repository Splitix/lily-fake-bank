"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [bank, setBank] = useState({
    amount: "...",
  });

  useEffect(() => {
    async function fetchPosts() {
      console.log("fetching bank");
      console.log(process.env.NEXT_PUBLIC_API_ENDPOINT);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}:3001/api/get/67ddb7a8132ec18c228d767b`
      ).finally(() => {
        setTimeout(fetchPosts, 30000);
      });
      const data = await res.json();
      setBank(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Lily's Bank</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="h22">
          $<h2>{parseFloat(bank.amount).toFixed(2)}</h2>
        </div>
      </main>
    </div>
  );
}
