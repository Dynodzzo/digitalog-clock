import { Component } from "react";
import { IClockProps, IClockState } from "./clock.model";
import { randomInt } from "../../shared/utils";
import { MAX_SPINS, MIN_SPINS } from "../../shared/constants";
import './clock.css';

class Clock extends Component<IClockProps, IClockState> {

  constructor(props: IClockProps) {
    super(props);

    this.state = {
      randomSpinHours: 0,
      randomSpinMinutes: 0
    };
  }

  componentDidUpdate(oldProps: IClockProps): void {
    if (oldProps.digit !== this.props.digit) {
      this.setState({
        randomSpinHours: this.getRandomSpin(),
        randomSpinMinutes: this.getRandomSpin()
      });
    }
  }

  private getRandomSpin(): number {
    return randomInt(MIN_SPINS, MAX_SPINS);
  }

  render() {
    return (
      <div className="clock">
        <div className="wrap">
          <span className="hours" style={{ transform: `rotate(${this.props.hoursAngle + (this.state.randomSpinHours * 360)}deg)` }}></span>
          <span className="minutes" style={{ transform: `rotate(${this.props.minutesAngle - (this.state.randomSpinMinutes * 360)}deg)` }}></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }

}

export default Clock;