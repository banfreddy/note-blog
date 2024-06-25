"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function ButtonProvider() {
  return (
    <div className="flex flex-col space-y-4">
      <Button onClick={() => signIn("github")}>Continuer avec Ghitub</Button>
      <Button onClick={() => signIn("google")}>Continuer avec Google</Button>
    </div>
  );
}
