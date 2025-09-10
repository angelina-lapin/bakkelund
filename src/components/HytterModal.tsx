import Modal from "./Modal";
import HytteCard from "./HytteCard";
import { hytter } from "../data/hytter";

export default function HytterModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Hytter"
      maxWidthClass="max-w-3xl"
      panelClassName="modal-panel"
    >
      {/* ВАЖНО: собственный скролл содержимого */}
      <div className="h-full overflow-y-auto pr-1">
        {hytter.map((h) => (
          <HytteCard key={h.id} hytte={h} />
        ))}
      </div>
    </Modal>
  );
}
