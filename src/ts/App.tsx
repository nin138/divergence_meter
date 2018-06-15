import * as React from "react";
import { hot } from "react-hot-loader";
import * as styles from "../css/index.css";
import { BETA_START_WORLD_LINE, DivergenceMeter, STEINS_GATE } from "./DivergenceMeter/DivergenceMeter";
import Timer = NodeJS.Timer;
interface State {
  divergence: string | number[];
  dest: number;
  isMoving: boolean;
  clock: string;
}

class App extends React.Component<{}, State> {
  timer: Timer | undefined;
  state = { divergence: BETA_START_WORLD_LINE, dest: 0, isMoving: false, clock: "" };
  componentWillMount() {
    this.timer = setInterval(() => {
      const time = new Date();
      const h = time
        .getHours()
        .toString()
        .padStart(2, "0");
      const m = time
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const s = time
        .getSeconds()
        .toString()
        .padStart(2, "0");
      this.setState({ clock: `${h}.${m}.${s}` });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer!);
  }
  filterSecond = (str: string) =>
    str
      .split("")
      .filter((_, i) => i !== 1)
      .join("");
  moveTo(dest: string) {
    if (this.state.isMoving) return;
    this.setState({
      dest: +this.filterSecond(dest),
      isMoving: true,
    });
    this.move();
  }
  move() {
    const filtered = +this.filterSecond(this.state.divergence);
    if (filtered === this.state.dest) {
      this.setState({ isMoving: false });
      return;
    }
    const ret = (filtered < this.state.dest ? filtered + 1 + "" : filtered - 1 + "").split("");
    ret.splice(1, 0, ".");
    this.setState({
      divergence: ret.join(""),
    });
    setTimeout(() => this.move(), 1);
  }
  random() {
    return new Promise(resolve => {
      let c = 0;
      const rand = () => {
        setTimeout(() => {
          c++;
          this.setState({ divergence: [...Array(8)].map(() => Math.floor(Math.random() * 11)) });
          if (c > 20) resolve("ok");
          else rand();
        }, 1);
      };
      rand();
    });
  }
  render() {
    return (
      <div>
        <div className={styles.wrapper}>
          <DivergenceMeter divergence={this.state.divergence} />
        </div>
        {/*<button onClick={() => this.moveTo(STEINS_GATE)}>benchmark</button>*/}
        <button onClick={() => this.random().then(() => this.setState({ divergence: STEINS_GATE }))}>
          go to Steins;Gate
        </button>
        <div className={styles.wrapper}>
          <DivergenceMeter divergence={this.state.clock} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
