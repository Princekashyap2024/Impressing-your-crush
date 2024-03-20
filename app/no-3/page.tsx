"use client";

import { ResponseButton } from "@/components/ResponseButton";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  function moveRandom() {
    if (!ref.current) return;
    const elem = ref.current;
    elem.style.position = "absolute";
    elem.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elem.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }

  useEffect(() => {
    if (!ref.current) return;
    ref.current.addEventListener("mouseenter", moveRandom);
    return () => {
      ref.current?.removeEventListener("mouseenter", moveRandom);
    };
  }, [ref.current]);

  return (
    <div className="container">
      <Link href="https://tenor.com/search/peach+goma-stickers" target="_blank">
        <img
          src="https://media.tenor.com/3bDvSVpiwjoAAAAi/peach-goma-phone.gif"
          alt=""
        />
      </Link>

      <h1>Manja na! Kitna bhav khaegi 😭</h1>
      <p>bht glt baat hai 😭</p>

      <div className="btn">
        <ResponseButton href="/yes">Yes</ResponseButton>
        <div className="fake-btn" ref={ref}>
          No
        </div>
      </div>
    </div>
  );
}
