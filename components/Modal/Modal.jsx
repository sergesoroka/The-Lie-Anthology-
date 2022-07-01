import { useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Modal.module.css";


import TagsList from '../Tags/TagsList'
import Categories from '../Categories/Categories'


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    e.stopPropagation();
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {showModal && (
        <div className={styles.modalBg}>
          <Categories />
          <TagsList />
        </div>
      )}
      {showModal && (
        <div className={styles.overlay} ref={modalRef} onClick={closeModal} />
      )}
    </motion.div>
  );
}
