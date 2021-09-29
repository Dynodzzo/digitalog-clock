import { IClockState } from "../../shared/models/clock-rotation.model";

export interface IDigitalogState {
  time: string;
  digits: IDigitsClocks;
}

export interface IDigitsClocks {
  [key: number]: IClockState[][];
}