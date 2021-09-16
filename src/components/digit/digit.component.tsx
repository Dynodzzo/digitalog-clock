import { Component } from "react";
import { IDigitProps } from "./digit.model";
import Clock from "../clock/clock.component";
import { IClockState } from "../../shared/models/clock-rotation.model";
import './digit.css';

class Digit extends Component<IDigitProps> {
  render() {
    return (
      <div className="digit">
        {this.props.clocksStates.map((clocksStatesLine: IClockState[], clocksStatesLineIndex: number) => {
          return <div key={`clockLine-${clocksStatesLineIndex}`} className="clocksRow">
            {clocksStatesLine.map((clockState: IClockState, clockStateIndex: number) => {
              return <Clock
                key={`clock-${clocksStatesLineIndex}${clockStateIndex}`}
                hoursAngle={clockState.rotation.hours}
                minutesAngle={clockState.rotation.minutes}
                digit={clockState.rotation.type}
                randomSpinsHours={clockState.spins.hours}
                randomSpinsMinutes={clockState.spins.minutes} />
            })
            }
          </div>
        })}
      </div>
    );
  }

}

export default Digit;