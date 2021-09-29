import { Component } from "react";
import { IDigitalogState } from "./digitalog.model";
import { ClockDigits, MAX_SPINS, MAX_SPINS_ITERATIONS, MIN_SPINS } from "../../shared/constants";
import { IClockRotation, IClockSpin, IClockState } from "../../shared/models/clock-rotation.model";
import Digit from "../digit/digit.component";
import Utils from "../../shared/utils";
import update from 'immutability-helper';
import './digitalog.css';

class Digitalog extends Component<{}, IDigitalogState> {

  intervalId: NodeJS.Timeout = setTimeout(() => { }, 0);

  constructor(props: {}) {
    super(props);

    this.state = {
      time: '0000',
      digits: {
        0: this.getDigitClocksState(0),
        1: this.getDigitClocksState(0),
        2: this.getDigitClocksState(0),
        3: this.getDigitClocksState(0)
      }
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
    const hours: string = `0${now.getHours()}`.slice(-2);
    const minutes: string = `0${now.getMinutes()}`.slice(-2);
    const time: string = `${hours}${minutes}`;

    time.split('').forEach((digit: string, digitIndex: number) => {
      if (digit !== this.state.time[digitIndex]) {
        this.updateDigit(Number(digit), digitIndex);
      }
    });

    this.setState({ time });
  }

  private updateDigit(digit: number, digitIndex: number) {
    const digitClocks: IClockState[][] = this.getDigitClocksState(digit, this.state.digits[digitIndex]);
    this.setState({ digits: update(this.state.digits, { [digitIndex]: { $set: digitClocks } }) });
  }

  private getDigitClocksState(digit: number, previousDigitClocks?: IClockState[][]): IClockState[][] {
    const digitClocksRotations: IClockRotation[][] = this.getClocksRotations(digit);

    return digitClocksRotations.map((rotationsLine: IClockRotation[], rotationsLineIndex: number) => {
      return rotationsLine.map((rotation: IClockRotation, rotationsIndex: number) => {
        let previousSpins: IClockSpin = { hours: 0, minutes: 0 };

        if (previousDigitClocks) {
          previousSpins = previousDigitClocks[rotationsLineIndex][rotationsIndex].spins;
        }

        const spins: IClockSpin = {
          hours: this.getNewRandomSpin(previousSpins.hours),
          minutes: this.getNewRandomSpin(previousSpins.minutes)
        };


        return {
          rotation: {
            ...rotation,
            hours: rotation.hours + (spins.hours * 360),
            minutes: rotation.minutes + (spins.minutes * 360)
          },
          spins,
          handleTransitionEnd: () => { }
        };
      });
    })
  }

  private getClocksRotations(value: number): IClockRotation[][] {
    return ClockDigits.get(value) as IClockRotation[][];
  }

  private getNewRandomSpin(previousSpin: number): number {
    let currentSpin: number = previousSpin;
    let randomSpinCount: number = 0;

    while (currentSpin === previousSpin && randomSpinCount < MAX_SPINS_ITERATIONS) {
      currentSpin = Utils.randomIntInRange(MIN_SPINS, MAX_SPINS);
      randomSpinCount++;
    }

    return currentSpin;
  }

  render() {
    return (
      <div className="digitalog-clock">
        <div className="digits">
          <Digit clocksStates={this.state.digits[0]} />
          <Digit clocksStates={this.state.digits[1]} />
        </div>
        <div className="digits">
          <Digit clocksStates={this.state.digits[2]} />
          <Digit clocksStates={this.state.digits[3]} />
        </div>
      </div>
    );
  }
}

export default Digitalog;