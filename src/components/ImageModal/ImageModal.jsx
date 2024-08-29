// import ImageGallery from "../ImageGallery/ImageGallery";

import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({
  image,
  onRequestClose,
  isOpen,
  description,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      size="sm"
      style={customStyles}
      overlayClassName={css.overlay}
    >
      <img
        src={image}
        alt={description}
        onClick={onRequestClose}
        className={css.modal}
      />
    </Modal>
  );
}
