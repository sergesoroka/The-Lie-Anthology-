import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Header.module.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.burger} onClick={() => setShowModal(prev => !prev)}>
        <div className={showModal ? styles.topActive : styles.top}></div>
        <div className={showModal ? styles.middleActive : styles.middle}></div>
        <div className={showModal ? styles.bottomActive : styles.bottom}></div>
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    
     </div>
  );
}
