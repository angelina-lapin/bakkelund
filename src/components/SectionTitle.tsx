export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mt-8 mb-3 text-center font-head text-[var(--deep-green)] tracking-wide uppercase">
      {children}
    </h2>
  );
}
