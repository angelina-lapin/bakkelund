import React, { forwardRef } from "react";
import Collapsible from "./Collapsible";
import SocialLinks from "./SocialLinks";

type Props = {
  open: boolean;
  images: string[];
};

const OmOssPanel = forwardRef<HTMLDivElement, Props>(function OmOssPanel(
  { open, images }: Props,
  ref
) {
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
            <p className="font-menu">
              Bakkelund er ikke bare et sted — det er en opplevelse av natur,
              fantasi og fellesskap.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Bakkelund ${i + 1}`}
                className="h-28 md:h-36 w-full object-cover rounded-xl"
                loading="lazy"
              />
            ))}
          </div>

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
    </section>
  );
});

export default OmOssPanel;
