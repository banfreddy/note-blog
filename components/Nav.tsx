"use client";
import Link from "next/link";
import LogoNote from "@/public/logo.svg";
import Image from "next/image";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href="/">
          <Image width={80} height={80} alt="logo" src={LogoNote} />
        </Link>
      </div>
      <div className="flex item-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
