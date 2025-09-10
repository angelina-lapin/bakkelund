import { useState, type ReactElement } from "react";
import type { Hytte, FacilityKey } from "../data/hytter";

const FACILITY_INFO: Record<
  FacilityKey,
  { label: string; Icon: () => ReactElement }
> = {
  wifi: {
    label: "Wi-Fi",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m5.07-3.75l1.43-1.43A9.969 9.969 0 0 0 12 11c-2.69 0-5.14 1.05-7 2.82l1.43 1.43A7.971 7.971 0 0 1 12 13c2.21 0 4.21.9 5.07 3.25M12 7c-3.87 0-7.33 1.56-9.9 4.1l1.43 1.42A12.94 12.94 0 0 1 12 9c3.47 0 6.64 1.37 8.96 3.52l1.43-1.42A14.94 14.94 0 0 0 12 7"
        />
      </svg>
    ),
  },
  parkering: {
    label: "Gratis parkering",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M13 3H6a1 1 0 0 0-1 1v16h2v-6h6a5 5 0 0 0 0-10m0 8H7V5h6a3 3 0 0 1 0 6"
        />
      </svg>
    ),
  },
  utsikt: {
    label: "Fin utsikt",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 6c-5 0-9 6-9 6s4 6 9 6s9-6 9-6s-4-6-9-6m0 10a4 4 0 1 1 .001-7.999A4 4 0 0 1 12 16m0-6a2 2 0 1 0 .001 3.999A2 2 0 0 0 12 10"
        />
      </svg>
    ),
  },
  dyr: {
    label: "Dyr er tillatt",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M4.5 9A1.5 1.5 0 1 0 6 10.5A1.5 1.5 0 0 0 4.5 9m3-5A2.5 2.5 0 1 0 10 6.5A2.5 2.5 0 0 0 7.5 4M12 9a2 2 0 1 0 2 2a2 2 0 0 0-2-2m6.5 0A1.5 1.5 0 1 0 20 10.5A1.5 1.5 0 0 0 18.5 9M15 3a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 15 3m-3 9s-5.5 3.5-5.5 6A2.5 2.5 0 0 0 9 20.5h6A2.5 2.5 0 0 0 17.5 18c0-2.5-5.5-6-5.5-6"
        />
      </svg>
    ),
  },
  fellesKjokken: {
    label: "Felles kjøkken",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M7 2h2v20H7V2m8 0h2v20h-2V2M4 6h16v2H4V6m0 10h16v2H4v-2Z"
        />
      </svg>
    ),
  },
  fellesBad: {
    label: "Felles bad",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M3 3h2v6h10V5a2 2 0 1 1 4 0v12a3 3 0 0 1-3 3H7a4 4 0 0 1-4-4z"
        />
      </svg>
    ),
  },
  uteomrade: {
    label: "Uteområde",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 2L1 21h22L12 2m0 4.84L19.53 19H4.47L12 6.84Z"
        />
      </svg>
    ),
  },
  barnevennlig: {
    label: "Barnevennlig",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8M6 22v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2z"
        />
      </svg>
    ),
  },
  boblebad: {
    label: "Privat boblebad",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M7 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m5 2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m4 10H4a4 4 0 0 1-4-4v-1h22v1a4 4 0 0 1-4 4Z"
        />
      </svg>
    ),
  },
};

function nok(n: number) {
  return new Intl.NumberFormat("no-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function HytteCard({ hytte }: { hytte: Hytte }) {
  const [idx, setIdx] = useState(0);
  const imgs = hytte.images.length ? hytte.images : [""];
  const prev = () => setIdx((i) => (i - 1 + imgs.length) % imgs.length);
  const next = () => setIdx((i) => (i + 1) % imgs.length);

  return (
    <article
      className="
        overflow-hidden rounded-2xl border-2 border-[var(--card-border)] bg-white mb-6
        transition-shadow hover:shadow-md
      "
    >
      {/* Галерея */}
      <div className="relative h-56 md:h-72 bg-gray-100">
        {imgs[0] ? (
          <img
            src={imgs[idx]}
            alt={hytte.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-gray-400">
            Bilde
          </div>
        )}
        {imgs.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-black/30 text-white px-2 py-1 active:scale-95 transition"
              aria-label="Forrige bilde"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-black/30 text-white px-2 py-1 active:scale-95 transition"
              aria-label="Neste bilde"
            >
              ▶
            </button>
          </>
        )}
      </div>

      {/* Контент */}
      <div className="p-4 md:p-5">
        <h3 className="font-head uppercase text-menu-green text-lg md:text-2xl tracking-wide">
          {hytte.name}
        </h3>

        <p className="mt-1 text-[15px] md:text-lg font-menu">
          {nok(hytte.priceNok)} / natt • Maks {hytte.guestsMax} gjester •{" "}
          {hytte.bedrooms} soverom ({hytte.bedsDesc})
        </p>

        {/* Удобства — иконки подсвечиваются при hover строки */}
        <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2 text-[13px] md:text-base">
          {hytte.facilities.map((key) => {
            const { label, Icon } = FACILITY_INFO[key];
            return (
              <li
                key={key}
                className="group flex items-center gap-2 text-gray-700 transition-colors"
              >
                <span className="text-[var(--menu-green)] transition-colors group-hover:text-[var(--facility-hover)]">
                  <Icon />
                </span>
                <span className="font-menu">{label}</span>
              </li>
            );
          })}
        </ul>

        {/* Кнопка */}
        {hytte.airbnbUrl ? (
          <a
            href={hytte.airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-terracotta inline-block mt-4 rounded-lg px-4 py-2 text-sm md:text-base font-menu font-semibold active:scale-95 transition"
          >
            Book på Airbnb
          </a>
        ) : (
          <span className="inline-block mt-4 rounded-lg px-4 py-2 text-sm md:text-base bg-gray-200 text-gray-500 cursor-not-allowed">
            Kontakt oss for booking
          </span>
        )}
      </div>
    </article>
  );
}
