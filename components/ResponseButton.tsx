"use client";

import { useClickContext } from "@/contexts/click-context";
import Link from "next/link";

export function ResponseButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const clickContext = useClickContext();
  function handleClick() {
    if (children.toLowerCase().includes("yes")) {
      (async () => {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        clickContext.response.push("Yes")
        await fetch("/api/", {
          method: "POST",
          body: JSON.stringify({
            response: clickContext.response,
            ip: data["ip"],
          }),
        });
      })();
    } else clickContext.addResponse(children);
  }
  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
