import React, {useState, useCallback, useRef } from 'react';
import { FiDownload } from 'react-icons/fi';
import { toPng } from 'html-to-image';

import styles from "./Card.module.css";

function Card({
  quote_id,
  person_id,
  evaluation,
  quote,
  quote_date,
  comment,
  source,
  topic1,
  topic2,
  speakerName,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'speakerName.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const bgColor =
    evaluation == "Неправда"
      ? styles.cardNepravda
      : evaluation == "Правда"
      ? styles.cardPravda
      : evaluation == "Маніпуляція"
      ? styles.cardManipulation
      : evaluation == "Перебільшення"
      ? styles.cardOverrated 
      : "";
  return (
    <div ref={ref} className={styles.card + " " + bgColor}>
      <>
        <h2 className={styles.authorName}>
          {speakerName} <span className={styles.evaluation}>/ {evaluation}</span>
        </h2>
        <p className={styles.date}>{quote_date}</p>
        <p className={styles.quote} onClick={() => setIsOpen(!isOpen)}>
          {quote}
        </p>
        {isOpen && <div  className={styles.commentBg}><div className={styles.comment} dangerouslySetInnerHTML={{__html: comment}}></div></div>}
        <div className={styles.iconsWrap}>
          <span className={styles.topic}>{topic1}</span>
          {topic2 ? <span className={styles.topic}>{topic2}</span> : null}
          <FiDownload className={styles.download} onClick={onButtonClick}/>
        </div>
      </> 
    </div>
  );
}

export default Card;
