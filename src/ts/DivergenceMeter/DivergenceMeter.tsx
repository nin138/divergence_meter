import * as React from "react";
import * as styles from "../../css/DivergenceMeter/DivirgenceMeter.css";
import { Nixie } from "./Nixie";

interface State {
  numbers: number[];
}

export class DivergenceMeter extends React.Component<{}, State> {
  state = { numbers: [0, 10, 2, 3, 4, 5, 0, 2, 3] };
  render() {
    return <div className={styles.wrap}>{this.state.numbers.map((it, i) => <Nixie key={i} num={+it} />)}</div>;
  }
}
