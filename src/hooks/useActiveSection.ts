import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], offsetPx = 80) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId((visible[0].target as HTMLElement).id);
        } else {
          // fallback: ближайший к верху с учётом офсета
          const y = window.scrollY + offsetPx + 1;
          let current = ids[0];
          for (const id of ids) {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= y) current = id;
          }
          setActiveId(current);
        }
      },
      {
        root: null,
        rootMargin: `-${offsetPx}px 0px -40% 0px`,
        threshold: [0.25, 0.6, 0.9],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offsetPx]);

  return activeId;
}
