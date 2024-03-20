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
  
  return (
    <Link href={href} onClick={() => clickContext.addResponse(children)}>
      {children}
    </Link>
  );
}
