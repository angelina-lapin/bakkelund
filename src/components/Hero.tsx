type Props = {
  image: string;
  onCta?: () => void;
};

export default function Hero({ image, onCta }: Props) {
  return (
    <section
      id="om-oss"
      className="relative mt-4 overflow-hidden rounded-2xl scroll-mt-24"
    >
      {/* фон */}
      <div
        className="h-[340px] md:h-[560px] bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* белый оверлей 40% */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* контент: выравниваем вправо */}
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center items-end text-right">
        <h1 className="font-hero font-light uppercase text-[#FFF4DE] text-4xl leading-tight md:text-6xl md:leading-[1.1] drop-shadow">
          Velkommen til
          <br />
          bakkelund
          <br />
          gård
        </h1>

        <button
          onClick={onCta}
          className="btn-terracotta mt-6 rounded-lg px-5 py-2 text-sm font-menu font-semibold self-end"
        >
          Om oss
        </button>
      </div>
    </section>
  );
}
