import { Component } from "react";
import { IDigitProps, IDigitState } from "./digit.model";
import Clock from "../clock/clock.component";
import { ClockDigits } from "../../shared/constants";
import { IClockRotation } from "../../shared/models/clock-rotation.model";
import './digit.css';

class Digit extends Component<IDigitProps, IDigitState> {

  constructor(props: IDigitProps) {
    super(props);

    this.state = {
      clocksRotations: this.getClocksRotations(this.props.value)
    };
  }

  componentDidUpdate(oldProps: IDigitProps): void {
    if (oldProps.value !== this.props.value) {
      this.setState({
        clocksRotations: this.getClocksRotations(this.props.value)
      });
    }
  }

  private getClocksRotations(value: number): IClockRotation[][] {
    return ClockDigits.get(value) as IClockRotation[][];
  }

  render() {
    return (
      <div className="digit">
        {this.state.clocksRotations.map((clocksRotationsLine: IClockRotation[], clocksRotationsLineIndex: number) => {
          return <div key={`clockLine-${clocksRotationsLineIndex}`} className="clocksRow">
            {clocksRotationsLine.map((clockRotation: IClockRotation, clocksRotationsIndex: number) => {
              return <Clock
                key={`clock-${clocksRotationsLineIndex}${clocksRotationsIndex}`}
                hoursAngle={clockRotation.hours}
                minutesAngle={clockRotation.minutes}
                digit={this.props.value} />
            })
            }
          </div>
        })}
      </div>
    );
  }

}

export default Digit;