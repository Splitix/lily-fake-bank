"use client";
import { useState, useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function Update() {
  const [bank, setBank] = useState({
    amount: "",
  });
  const [text, setText] = useState("");

  async function fetchPosts() {
    console.log("fetching bank");
    const res = await fetch(apiUrl + ":3001/api/get/67ddb7a8132ec18c228d767b");
    const data = await res.json();
    setBank(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (text == "") {
      console.log("no value to submit");
    } else {
      try {
        const response = await fetch(
          apiUrl + ":3001/api/update/67ddb7a8132ec18c228d767b",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: parseFloat(text),
            }),
          }
        );

        if (response.ok) {
          console.log("Form submitted successfully!");
          setText("");
          fetchPosts();
        } else {
          console.error("Form submission failed.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h3>Update Lily's Bank</h3>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <label>
          <div style={{ fontSize: "25px", color: "white" }}>
            Current Amount: ${parseFloat(bank.amount).toFixed(2)}
          </div>
        </label>
        <form onSubmit={handleSubmit}>
          <label>
            <div style={{ color: "white" }}>New Amount:</div>
            <input
              className="input"
              type="number"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button className="minecraft-button" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
