"use client";

import { useClickContext } from "@/contexts/click-context";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const clickContext = useClickContext();
  async function handleSave() {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    await fetch("/api/", {
      method: "POST",
      body: JSON.stringify({
        response: clickContext.response,
        ip: data["ip"],
      }),
    });
  }

  useEffect(() => {
    if (clickContext.response.length > 0) handleSave();
  }, []);
  return (
    <div className="container">
      <Link href="https://tenor.com/search/mochi-gifs" target="_blank">
        <img
          src="https://media1.tenor.com/m/A4Lvk69JMJkAAAAC/mochi-cat.gif"
          alt=""
        />
      </Link>
      <h1>Hehehehe, I knew it! 😘</h1>
    </div>
  );
}
