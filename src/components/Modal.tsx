import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidthClass?: string;
  panelClassName?: string;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  maxWidthClass,
  panelClassName,
}: Props) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* overlay под панелью */}
      <div className="absolute inset-0 modal-overlay z-0"></div>

      {/* панель выше overlay */}
      <div
        className={`relative z-10 mx-auto my-8 w-[92%] ${
          maxWidthClass ?? "max-w-2xl"
        } rounded-2xl ${panelClassName ?? "modal-panel"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* фиксируем высоту всей панели, а не max-h */}
        <div className="flex flex-col h-[85vh] p-5">
          {/* шапка не сжимается */}
          <div className="mb-3 flex items-center justify-between shrink-0">
            {title && <h3 className="font-head text-xl">{title}</h3>}
            <button
              aria-label="Close"
              onClick={onClose}
              className="text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* тело занимает остаток, НЕТ внешнего скролла */}
          <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
