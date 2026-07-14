import { ThemeProvider } from "@/components/theme-provider";
import { GlowBackground } from "@/components/GlowBackground";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Hunzala Qamar - Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full",
          inter.variable,
          plusJakarta.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlowBackground />
          <div className="container mx-auto px-4">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
