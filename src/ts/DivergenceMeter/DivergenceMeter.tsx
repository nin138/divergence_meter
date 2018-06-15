import * as React from "react";
import * as styles from "../../css/DivergenceMeter/DivirgenceMeter.css";
import { Nixie } from "./Nixie";

interface Props {
  divergence: string | number[];
}

export const STEINS_GATE = "1.048596";
export const BETA_START_WORLD_LINE = "1.130426";
export const ALPHA_START_WORLD_LINE = "0.571024";

const divergenceToArray = (divergence: string): number[] =>
  divergence.split("").map((it: string) => (it === "." ? 10 : +it));

export const DivergenceMeter = (props: Props) => (
  <div className={styles.wrap}>
    {(typeof props.divergence === "string" ? divergenceToArray(props.divergence) : props.divergence).map((it, i) => (
      <Nixie key={i} num={+it} />
    ))}
  </div>
);
