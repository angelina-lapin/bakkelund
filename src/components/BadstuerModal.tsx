import Modal from "./Modal";
import { badstuer } from "../data/badstuer";
import BadstuCard from "./BadstuCard";

export default function BadstuerModal({
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
      title="Badstuer"
      maxWidthClass="max-w-3xl"
      panelClassName="modal-panel"
    >
      <div className="h-full overflow-y-auto pr-1">
        {badstuer.map((b) => (
          <BadstuCard key={b.id} item={b} />
        ))}
      </div>
    </Modal>
  );
}
