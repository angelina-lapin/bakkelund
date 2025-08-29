type Props = {
  id: string;
  image: string;
  text: string;
  ctaLabel: string;
  onCta: () => void;
};

export default function SectionCard({
  id,
  image,
  text,
  ctaLabel,
  onCta,
}: Props) {
  return (
    <section
      id={id}
      className="relative overflow-hidden rounded-2xl scroll-mt-24"
    >
      <div
        className="h-[260px] md:h-[380px] bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between">
        <p className="max-w-[70%] font-body text-white text-sm md:text-base drop-shadow">
          {text}
        </p>
        <button
          onClick={onCta}
          className="btn-terracotta self-start rounded-lg px-4 py-2 text-sm font-body font-semibold"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
