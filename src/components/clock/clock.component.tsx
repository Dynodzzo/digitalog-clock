import { Component } from "react";
import { IClockProps, IClockState } from "./clock.model";
import './clock.css';
import { MAX_SPINS } from "../../shared/constants";

class Clock extends Component<IClockProps, IClockState> {

  constructor(props: IClockProps) {
    super(props);

    this.state = {
      randomSpinHours: 0,
      randomSpinMinutes: 0
    };
  }

  componentDidUpdate(oldProps: IClockProps): void {
    if (oldProps.hours !== this.props.hours || oldProps.minutes !== this.props.minutes) {
      this.randomizeSpin();
    }
  }

  private randomizeSpin(): void {
    const randomSpinHours: number = Math.floor(Math.random() * MAX_SPINS);
    const randomSpinMinutes: number = Math.floor(Math.random() * MAX_SPINS);

    this.setState({
      randomSpinHours,
      randomSpinMinutes
    });

  }

  render() {
    return (
      <div className="clock">
        <div className="wrap">
          <span className="hours" style={{ transform: `rotate(${this.props.hours + (this.state.randomSpinHours * 360)}deg)` }}></span>
          <span className="minutes" style={{ transform: `rotate(${this.props.minutes + (this.state.randomSpinMinutes * 360)}deg)` }}></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }

}

export default Clock;