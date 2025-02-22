"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NAV_LINKS } from "../data/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="">
            <span className="font-bold inline-block">Hunzala Qamar</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground/80"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <Button
          variant="outline"
          className="ml-auto"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1xXJuP3uezBe3F6tCORc3Qxf6jZj4Za1T/view?usp=sharing",
              "_blank"
            )
          }
        >
          Resume
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
