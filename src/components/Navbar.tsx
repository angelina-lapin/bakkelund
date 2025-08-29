import { useState } from "react";

type Props = { logoSrc: string; activeId?: string };

const links = [
  { href: "#om-oss", id: "om-oss", label: "Om oss" },
  { href: "#hytter", id: "hytter", label: "Hytter" },
  { href: "#badstuer", id: "badstuer", label: "Badstuer" },
  { href: "#arrangementer", id: "arrangementer", label: "Arrangementer" },
  { href: "#malekurs", id: "malekurs", label: "Malekurs" },
  { href: "#kontakt", id: "kontakt", label: "Kontakt" },
];

export default function Navbar({ logoSrc, activeId }: Props) {
  const [open, setOpen] = useState(false);

  const desktopLinkClass = (id: string) =>
    `font-menu px-2 py-1 rounded-md transition text-menu-green ${
      activeId === id ? "bg-black/10 font-semibold" : "hover:bg-black/5"
    }`;

  const mobileLinkClass = (id: string) =>
    `font-menu text-xl rounded-md px-2 py-2 transition text-menu-green ${
      activeId === id ? "bg-black/10 font-semibold" : "hover:bg-black/5"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-sand">
      <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Bakkelund"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-logo text-2xl text-brand-brown leading-none">
            Bakkelund
          </span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={desktopLinkClass(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Burger (mobile only) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden h-10 w-10 inline-flex items-center justify-center"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-7 bg-brand-brown"></span>
            <span className="block h-0.5 w-7 bg-brand-brown"></span>
            <span className="block h-0.5 w-7 bg-brand-brown"></span>
          </div>
        </button>
      </div>

      {/* Half-screen drawer with slide-in animation (mobile) */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* panel */}
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute right-0 top-0 h-full w-1/2 min-w-[280px] max-w-[420px]
            bg-sand shadow-2xl p-6 flex flex-col gap-2
            transform transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="self-end text-sm text-menu-green mb-2"
          >
            ✕
          </button>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={mobileLinkClass(l.id)}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
