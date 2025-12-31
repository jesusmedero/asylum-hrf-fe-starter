"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth0 } from "@auth0/auth0-react";
import { LoggingButtons } from "../../auth/LoggingButtons.jsx";

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="flex w-[100%] primary-c justify-between px-14">
      <div className="flex justify-between">
        <Link href="https://www.humanrightsfirst.org/" target="_blank">
          <Image
            className="w-[100px] h-auto"
            src="/logo.png"         // <-- viene de /public/logo.png
            alt="HRF logo white"
            width={100}            // requerido por next/image
            height={40}            // ajusta a la proporción de tu logo
          />
        </Link>
      </div>

      <div className="flex items-center py-4 gap-16">
        <Link href="/" className="nav-btn">
          Home
        </Link>
        <Link href="/graphs" className="nav-btn">
          Graphs
        </Link>
        {isAuthenticated && (
          <Link href="/profile" className="nav-btn">
            Profile
          </Link>
        )}
        <LoggingButtons />
      </div>
    </header>
  );
}

