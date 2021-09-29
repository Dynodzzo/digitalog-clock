import { Component, TransitionEvent } from "react";
import { IClockProps } from "./clock.model";
import './clock.css';

class Clock extends Component<IClockProps> {

  private animate: boolean = true;
  private hoursAngle: number = 0;
  private minutesAngle: number = 0;

  componentDidUpdate(previousProps: IClockProps) {
    if (previousProps.hoursAngle !== this.props.hoursAngle || previousProps.minutesAngle !== this.props.minutesAngle) {
      console.log("update");
      this.hoursAngle = this.props.hoursAngle;
      this.minutesAngle = this.props.minutesAngle;
      this.animate = true;
    }
  }

  handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    console.log("transition end");
    this.animate = false;
    this.hoursAngle = ((this.props.hoursAngle / 360) % 1) * 360;
    this.minutesAngle = ((this.props.minutesAngle / 360) % 1) * 360;
    this.render();
  }

  render() {
    return (
      <div className={`clock ${this.animate ? "animate" : ""}`} onTransitionEnd={(event: TransitionEvent<HTMLDivElement>) => this.handleTransitionEnd(event)}>
        <div className="wrap">
          <span className="hours" style={{ transform: `rotate(${this.hoursAngle}deg)` }}></span>
          <span className="minutes" style={{ transform: `rotate(${this.minutesAngle}deg)` }}></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }

}

export default Clock;