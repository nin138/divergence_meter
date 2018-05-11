import * as React from "react";
import { hot } from "react-hot-loader";
import * as styles from "../css/index.css";
interface State {
  text: string;
}
export function t(a: string): string {
  return a == "" ? "hello, world!" : a;
}

class App extends React.Component<{}, State> {
  state = { text: "" };
  render() {
    return (
      <div className={styles.test}>
        {t(this.state.text)}
        <br />
        <input
          value={this.state.text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
      </div>
    );
  }
}

export default hot(module)(App);
