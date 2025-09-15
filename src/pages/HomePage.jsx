import { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SectionCard from "../components/SectionCard";
import Hero from "../components/Hero";
import HytterModal from "../components/HytterModal";
import OmOssPanel from "../components/OmOssPanel";
import BadstuerModal from "../components/BadstuerModal";
import heroImg from "../assets/hero.jpg";
import hytterImg from "../assets/hytter.jpg";
import badstueImg from "../assets/badstue.jpg";
import arrImg from "../assets/arrangementer.jpg";
import malekursImg from "../assets/malekurs.png";

import g1 from "../assets/gal1.jpg";
import g2 from "../assets/gal2.jpg";
import g3 from "../assets/gal3.jpg";
import g4 from "../assets/gal4.jpg";
import g5 from "../assets/gal5.jpg";
import g6 from "../assets/gal6.jpg";

export default function HomePage() {
  const [hytterOpen, setHytterOpen] = useState(false);
  const [badstuerOpen, setBadstuerOpen] = useState(false);
  const [omOpen, setOmOpen] = useState(false);
  const omRef = useRef(null);
  const handleOmCta = () => {
    setOmOpen((prev) => {
      const next = !prev;
      if (!prev) {
        // чуть позже скроллим к карточке, чтобы «выезд» был виден
        setTimeout(
          () =>
            omRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            }),
          30
        );
      }
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 font-body">
      <Hero image={heroImg} onCta={handleOmCta} />

      {/* выезжающая карточка Om oss */}
      <OmOssPanel ref={omRef} open={omOpen} images={[g1, g2, g3, g4, g5, g6]} />

      <SectionTitle>Hytter</SectionTitle>
      <SectionCard
        id="hytter"
        image={hytterImg}
        text="Vi har tre fantastiske hytter for deg å leie ut"
        ctaLabel="Finn ut mer"
        onCta={() => setHytterOpen(true)}
      />
      <HytterModal open={hytterOpen} onClose={() => setHytterOpen(false)} />

      <SectionTitle>Badstuer</SectionTitle>
      <SectionCard
        id="badstuer"
        image={badstueImg}
        text="Det er mulig å booke badstue hos oss"
        ctaLabel="Finn ut mer"
        onCta={() => setBadstuerOpen(true)}
      />
      <BadstuerModal
        open={badstuerOpen}
        onClose={() => setBadstuerOpen(false)}
      />

      <SectionTitle>Arrangementer</SectionTitle>
      <SectionCard
        id="arrangementer"
        image={arrImg}
        text="Perfekt sted for ditt neste arrangement! Kun 30 min fra Oslo."
        ctaLabel="Finn ut mer"
        onCta={() => alert("Модалка/страница для Arrangementer")}
      />

      <SectionTitle>Malekurs</SectionTitle>
      <SectionCard
        id="malekurs"
        image={malekursImg}
        text="Hver søndag har vi malekurs for både små og store. Hjertelig velkommen!"
        ctaLabel="Finn ut mer"
        onCta={() => alert("Модалка/страница для Malekurs")}
      />
    </div>
  );
}
