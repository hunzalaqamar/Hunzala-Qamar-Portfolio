"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SOCIAL_LINKS } from "../data/data";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Full Stack Developer
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Building digital experiences with modern technologies. Focused on
              creating elegant solutions to complex problems.
            </p>
          </div>

          <div className="space-x-4">
            {SOCIAL_LINKS.map(({ href, Icon, srLabel }) => (
              <Link key={href} href={href} target="_blank">
                <Button variant="outline" size="icon">
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{srLabel}</span>
                </Button>
              </Link>
            ))}
          </div>
          <Button
            variant="outline"
            className="p-5 text-bold"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1xXJuP3uezBe3F6tCORc3Qxf6jZj4Za1T/view?usp=sharing",
                "_blank"
              )
            }
          >
            <Download className="w-8 h-8"></Download> Get My Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
