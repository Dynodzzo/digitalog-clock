import { IClockRotation } from "@shared";

export interface IDigitProps {
  value: number;
}

export interface IDigitState {
  clocksRotations: IClockRotation[][];
}
