import { Component } from "react";
import { IClockProps, IClockState } from "./clock.model";
import { randomInt } from "../../shared/utils";
import { MAX_SPINS_ITERATIONS, MAX_SPINS, MIN_SPINS } from "../../shared/constants";
import './clock.css';

class Clock extends Component<IClockProps, IClockState> {

  constructor(props: IClockProps) {
    super(props);

    this.state = {
      randomSpinsHours: 0,
      randomSpinsMinutes: 0,
      animate: true
    };
  }

  componentDidUpdate(oldProps: IClockProps): void {
    if (oldProps.digit !== this.props.digit) {
      const randomSpinsHours: number = this.getRandomSpin(this.state.randomSpinsHours);
      const randomSpinsMinutes: number = this.getRandomSpin(this.state.randomSpinsMinutes);

      this.setState({ randomSpinsHours, randomSpinsMinutes, animate: true });
    }
  }

  private getRandomSpin(previousSpin: number): number {
    let currentSpin: number = previousSpin;
    let randomSpinCount: number = 0;

    while (currentSpin === previousSpin && randomSpinCount < MAX_SPINS_ITERATIONS) {
      currentSpin = randomInt(MIN_SPINS, MAX_SPINS);
      randomSpinCount++;
    }

    return currentSpin;
  }

  private handleTransitionEnd() {
    this.setState({ randomSpinsHours: 0, randomSpinsMinutes: 0, animate: false });
  }

  render() {
    const newRotationAngleHours: number = this.props.hoursAngle + (this.state.randomSpinsHours * 360);
    const newRotationAngleMinutes: number = this.props.minutesAngle + (this.state.randomSpinsMinutes * 360);

    return (
      <div className={`clock ${this.state.animate ? "animate" : ""}`} onTransitionEnd={_ => this.handleTransitionEnd()}>
        <div className="wrap">
          <span className="hours" style={{ transform: `rotate(${newRotationAngleHours}deg)` }}></span>
          <span className="minutes" style={{ transform: `rotate(${newRotationAngleMinutes}deg)` }}></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }

}

export default Clock;