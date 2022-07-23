import { Component } from "react";
import { DigitalogState, Digit } from "@components";
import "./digitalog.css";

export class Digitalog extends Component<{}, DigitalogState> {
  intervalId: ReturnType<typeof setTimeout> = setTimeout(() => {}, 0);

  constructor(props: {}) {
    super(props);

    this.state = {
      hours: "00",
      minutes: "00",
    };
  }

  componentDidMount(): void {
    this.intervalId = setInterval(() => this.updateClockDigits(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  private updateClockDigits(): void {
    const now: Date = new Date();

    this.setState({
      hours: `0${now.getHours()}`.slice(-2),
      minutes: `0${now.getMinutes()}`.slice(-2),
    });
  }

  render() {
    return (
      <div className="digitalog-clock">
        <div className="digits">
          <Digit value={Number(this.state.hours[0])} />
          <Digit value={Number(this.state.hours[1])} />
        </div>
        <div className="digits">
          <Digit value={Number(this.state.minutes[0])} />
          <Digit value={Number(this.state.minutes[1])} />
        </div>
      </div>
    );
  }
}
