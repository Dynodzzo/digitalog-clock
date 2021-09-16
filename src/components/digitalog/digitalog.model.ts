import { IClockState } from "../../shared/models/clock-rotation.model";

export interface IDigitalogState {
  hours: string;
  minutes: string;
  digits: IDigitsClocks;
}

export interface IDigitsClocks {
  hoursFirst: IClockState[][];
  hoursSecond: IClockState[][];
  minutesFirst: IClockState[][];
  minutesSecond: IClockState[][];
}