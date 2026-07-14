import Link from "next/link";
import { EMAIL, SOCIAL_LINKS } from "../data/data";

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5">
      <div className="container flex flex-col gap-6 py-10 items-center px-4 md:px-6 text-center">
        <div>
          <h3 className="font-display font-bold text-xl tracking-tight text-foreground">
            Let&apos;s build something together.
          </h3>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-muted-foreground hover:text-gradient-primary transition-colors"
          >
            {EMAIL}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ href, Icon, srLabel }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-xs font-display font-semibold text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-primary/40 hover:shadow-[0_0_15px_rgba(167,139,250,0.25)]"
            >
              <Icon className="h-3.5 w-3.5" />
              {srLabel}
            </Link>
          ))}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Hunzala Qamar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
