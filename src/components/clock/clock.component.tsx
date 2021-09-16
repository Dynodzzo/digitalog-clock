import { Component } from "react";
import { IClockProps } from "./clock.model";
import './clock.css';

class Clock extends Component<IClockProps> {
  render() {
    const newRotationAngleHours: number = this.props.hoursAngle + (this.props.randomSpinsHours * 360);
    const newRotationAngleMinutes: number = this.props.minutesAngle + (this.props.randomSpinsMinutes * 360);

    return (
      <div className="clock">
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