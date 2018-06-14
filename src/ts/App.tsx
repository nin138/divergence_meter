import * as React from "react";
import { hot } from "react-hot-loader";
import * as styles from "../css/index.css";
import { DivergenceMeter } from "./DivergenceMeter/DivergenceMeter";
interface State {
  text: string;
}

class App extends React.Component<{}, State> {
  render() {
    return (
      <div className={styles.wrapper}>
        <DivergenceMeter />
      </div>
    );
  }
}

export default hot(module)(App);
