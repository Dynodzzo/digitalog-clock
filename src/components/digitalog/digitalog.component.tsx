import { Component } from "react";
import { IDigitalogState } from "./digitalog.model";
import { ClockDigits, MAX_SPINS, MAX_SPINS_ITERATIONS, MIN_SPINS } from "../../shared/constants";
import { IClockRotation, IClockSpin, IClockState } from "../../shared/models/clock-rotation.model";
import Digit from "../digit/digit.component";
import Utils from "../../shared/utils";
import './digitalog.css';

class Digitalog extends Component<{}, IDigitalogState> {

  intervalId: NodeJS.Timeout = setTimeout(() => { }, 0);

  constructor(props: {}) {
    super(props);

    this.state = {
      hours: '00',
      minutes: '00',
      digits: {
        hoursFirst: this.getDigitClocksState(0),
        hoursSecond: this.getDigitClocksState(0),
        minutesFirst: this.getDigitClocksState(0),
        minutesSecond: this.getDigitClocksState(0)
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

    if (hours[0] !== this.state.hours[0]) this.updateHoursFirstDigit(Number(hours[0]));
    if (hours[1] !== this.state.hours[1]) this.updateHoursSecondDigit(Number(hours[1]));
    if (minutes[0] !== this.state.minutes[0]) this.updateMinutesFirstDigit(Number(minutes[0]));
    if (minutes[1] !== this.state.minutes[1]) this.updateMinutesSecondDigit(Number(minutes[1]));

    this.setState({ hours, minutes });
  }

  private updateHoursFirstDigit(value: number) {
    const hoursFirst: IClockState[][] = this.getDigitClocksState(value, this.state.digits.hoursFirst);
    this.setState({ digits: { ...this.state.digits, hoursFirst } });
  }

  private updateHoursSecondDigit(value: number) {
    const hoursSecond: IClockState[][] = this.getDigitClocksState(value, this.state.digits.hoursSecond);
    this.setState({ digits: { ...this.state.digits, hoursSecond } });
  }

  private updateMinutesFirstDigit(value: number) {
    const minutesFirst: IClockState[][] = this.getDigitClocksState(value, this.state.digits.minutesFirst);
    this.setState({ digits: { ...this.state.digits, minutesFirst } });
  }

  private updateMinutesSecondDigit(value: number) {
    const minutesSecond: IClockState[][] = this.getDigitClocksState(value, this.state.digits.minutesSecond);
    this.setState({ digits: { ...this.state.digits, minutesSecond } });
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

        return { rotation, spins };
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
          <Digit clocksStates={this.state.digits.hoursFirst} />
          <Digit clocksStates={this.state.digits.hoursSecond} />
        </div>
        <div className="digits">
          <Digit clocksStates={this.state.digits.minutesFirst} />
          <Digit clocksStates={this.state.digits.minutesSecond} />
        </div>
      </div>
    );
  }
}

export default Digitalog;