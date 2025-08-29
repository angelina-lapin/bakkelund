import Modal from "./Modal";
import { hytter } from "../data/hytter";

type Props = { open: boolean; onClose: () => void };

export default function HytterModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Hytter">
      <div className="grid gap-4">
        {hytter.map((h) => (
          <article key={h.id} className="overflow-hidden rounded-xl border">
            <img
              src={h.image}
              alt={h.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h4 className="font-head text-lg">{h.name}</h4>
              <p className="mt-1 text-sm text-gray-600">{h.description}</p>
              <a
                href={h.airbnbUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-terracotta mt-3 inline-block rounded-lg px-4 py-2 text-sm font-semibold"
              >
                Book på Airbnb
              </a>
            </div>
          </article>
        ))}
      </div>
    </Modal>
  );
}
