"use client";

import { ResponseButton } from "@/components/ResponseButton";
import { useClickContext } from "@/contexts/click-context";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const clickContext = useClickContext();
  useEffect(() => {
    if (clickContext.response.length > 0) clickContext.clearResponse();
  }, []);
  return (
    <div className="container">
      <Link href="https://tenor.com/search/manja-stickers" target="_blank">
        <img src="https://media.tenor.com/p_VEcmrBsLMAAAAi/manja.gif" alt="" />
      </Link>
      <h1>DO you love me? 🤗</h1>
      <p>~techeonn tera hi hai</p>

      <div className="btn">
        <ResponseButton href="/yes">Yes</ResponseButton>
        <ResponseButton href="/no-1">No</ResponseButton>
      </div>
    </div>
  );
}
