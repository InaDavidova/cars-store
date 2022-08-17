import styles from "../ConfirmModal/ConfirmModal.module.css";

function ConfirmModal({ onClose, onConfirm }) {
  return (
    <div className={styles.confirmModal}>
      <h1>Are you sure?</h1>
      <p>You want to delete this file?</p>
      <button onClick={onClose} className={styles.abortBtn}>
        No
      </button>
      <button
        className={styles.confirmBtn}
        onClick={() => {
          onConfirm();
          onClose();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ConfirmModal;
