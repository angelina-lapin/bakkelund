import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Collapsible({ open, children, className }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(open ? "auto" : 0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (open) {
      // раскрытие: 0 -> scrollHeight -> auto
      const h = el.scrollHeight;
      setHeight(h);
      const t = window.setTimeout(() => setHeight("auto"), 300);
      return () => window.clearTimeout(t);
    } else {
      // сворачивание: auto -> current px -> 0
      if (height === "auto") {
        const h = el.scrollHeight;
        setHeight(h);
        requestAnimationFrame(() => setHeight(0));
      } else {
        setHeight(0);
      }
    }
  }, [open]);

  return (
    <div
      className={`overflow-hidden transition-[height] duration-300 ease-out ${
        className || ""
      }`}
      style={{ height: height === "auto" ? "auto" : `${height}px` }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
