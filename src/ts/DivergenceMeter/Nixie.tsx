import * as React from "react";
import * as styles from "../../css/DivergenceMeter/Nixie.css";

export const Nixie = (props: { num: number }) => (
  <div className={styles.nixie}>
    {[...Array(11).keys()].map(i => (
      <div
        key={i}
        className={i !== props.num ? styles.char : styles.char__selected}
        style={i === 10 ? { margin: "15px 0 0 40px" } : {}}
      >
        {i === 10 ? "." : i}
      </div>
    ))}
    <div className={styles.mesh} />
    <div className={styles.tube}>
      <div className={styles.highlight} />
    </div>
  </div>
);
