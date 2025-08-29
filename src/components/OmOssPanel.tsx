import React, { forwardRef, useEffect, useState } from "react";
import Collapsible from "./Collapsible";
import SocialLinks from "./SocialLinks";
import Modal from "./Modal";

/** Выбор режима масштабирования изображения в лайтбоксе:
 *  - 'contain' — вмещает целиком (без обрезки)
 *  - 'cover'   — заполняет контейнер (с обрезкой лишнего)
 */
type LightboxMode = "contain" | "cover";
const LIGHTBOX_MODE: LightboxMode = "cover";

const IMG_CLASS: Record<LightboxMode, string> = {
  contain: "max-h-full max-w-full object-contain",
  cover: "h-full w-full object-cover",
};

type Props = {
  open: boolean;
  images: string[];
};

const OmOssPanel = forwardRef<HTMLDivElement, Props>(function OmOssPanel(
  { open, images }: Props,
  ref
) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Навигация стрелками ← →
  useEffect(() => {
    if (lightboxIdx === null || images.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIdx((i) => (i === null ? 0 : (i + 1) % images.length));
      } else if (e.key === "ArrowLeft") {
        setLightboxIdx((i) =>
          i === null ? 0 : (i - 1 + images.length) % images.length
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, images.length]);

  const closeLightbox = () => setLightboxIdx(null);
  const next = () =>
    setLightboxIdx((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () =>
    setLightboxIdx((i) =>
      i === null ? 0 : (i - 1 + images.length) % images.length
    );

  return (
    <section id="om-oss-info" className="scroll-mt-24" ref={ref}>
      <Collapsible open={open} className="mt-3">
        <article className="rounded-2xl bg-white/90 backdrop-blur p-5 md:p-8 shadow-lg">
          <div className="prose max-w-none prose-p:my-3 prose-headings:font-head">
            <h3 className="font-head text-xl md:text-2xl text-[var(--deep-green)] mb-2">
              Velkommen til Bakkelund 🌿
            </h3>
            <p className="font-menu">
              Bakkelund er vårt hjem — et sted der familie, venner og fellesskap
              møtes. Her lever vi side om side med katten vår, de glade hønene
              og naturens rytme.
            </p>
            <p className="font-menu">
              Trå inn i en hage fylt med blomster, urter og grønnsaker, vandre
              gjennom den magiske skogen med sine skjulte hytter, tretopphus,
              underjordiske badehall og andre små overraskelser som venter på å
              bli oppdaget.
            </p>
            {/* увеличенный отступ и ЖИРНЫЙ последний абзац */}
            <p className="font-menu mt-6 font-bold">
              Bakkelund er ikke bare et sted — det er en opplevelse av natur,
              fantasi og fellesskap.
            </p>
          </div>

          {/* мини-галерея */}
          {images.length > 0 && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightboxIdx(i)}
                  className="group overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
                  aria-label={`Åpne bilde ${i + 1}`}
                >
                  <img
                    src={src}
                    alt={`Bakkelund ${i + 1}`}
                    className="h-28 md:h-36 w-full object-cover transition-transform duration-200 group-hover:scale-[1.03] cursor-zoom-in"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}

          {/* контакты + соцсети */}
          <div className="mt-6 rounded-xl bg-[var(--sand)] p-4">
            <h4 className="font-head text-[var(--deep-green)] mb-2">Kontakt</h4>
            <div className="text-sm text-gray-700 font-menu">
              <p>
                E-post: <span className="underline">post@bakkelund.no</span>
              </p>
              <p>
                Telefon: <span className="underline">+47 000 00 000</span>
              </p>
            </div>
            <div className="mt-3">
              <SocialLinks />
            </div>
          </div>
        </article>
      </Collapsible>

      {/* Лайтбокс */}
      <Modal
        open={lightboxIdx !== null}
        onClose={closeLightbox}
        maxWidthClass="max-w-4xl"
        panelClassName="modal-panel"
      >
        {lightboxIdx !== null && images.length > 0 && (
          // ДВА ряда: картинка (растягивается) + панель кнопок (всегда видна)
          <div className="grid h-full grid-rows-[minmax(0,1fr)_auto]">
            {/* Ряд 1: зона изображения — без скролла */}
            <div className="min-h-0 grid place-items-center overflow-hidden">
              <img
                src={images[lightboxIdx]}
                alt={`Bilde ${lightboxIdx + 1}`}
                className={IMG_CLASS[LIGHTBOX_MODE]}
              />
            </div>

            {/* Ряд 2: кнопки — НЕ сжимаются, кликабельность гарантирована */}
            <div className="pt-3 flex items-center justify-between shrink-0">
              <button
                onClick={prev}
                className="rounded-md px-3 py-2 border border-[var(--menu-green)] text-[var(--menu-green)] active:scale-95 hover:bg-[var(--menu-green)] hover:text-white transition"
              >
                ◀ Forrige
              </button>
              <span className="text-sm text-[var(--menu-green)]">
                {lightboxIdx + 1} / {images.length}
              </span>
              <button
                onClick={next}
                className="rounded-md px-3 py-2 border border-[var(--menu-green)] text-[var(--menu-green)] active:scale-95 hover:bg-[var(--menu-green)] hover:text-white transition"
              >
                Neste ▶
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
});

export default OmOssPanel;
