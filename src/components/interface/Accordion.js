"use client"

import classNames from "classnames";
import { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionArrow from "./AccordionArrow";

const Accordion = ({ summary, children, subtitle }) => {
  const [hiddenContent, setHiddenContent] = useState(true);

  function handleActiveAcordion() {
    setHiddenContent(!hiddenContent);
  }
  return (
    <section onClick={handleActiveAcordion} className={styles.container}>
      <div className={styles.containerTitle}>
        <summary className={styles.summary}>{summary}</summary>
        <AccordionArrow className={classNames(styles.arrow, !hiddenContent && styles.arrwAnimation)} stroke={5}/>
      </div>
      <div
        className={classNames(
          styles.content,
          !hiddenContent ? styles.contentActive : ""
        )}
        
      >
        <span
          style={{
            opacity: `${hiddenContent ? "0" : "1"}`,
            transition: "all 700ms linear ease-out",
          }}
        >
          {subtitle}
        </span>
        <p
          style={{
            opacity: `${hiddenContent ? "0" : "1"}`,
            transition: "all 600ms linear ease-out",
          }}
          className={styles.parrafo}
        >
          {children}
        </p>
      </div>
    </section>
  );
};

export default Accordion;
