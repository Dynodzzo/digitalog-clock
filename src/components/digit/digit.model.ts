import { IClockRotation } from "../../shared/models/clock.model";

export interface IDigitProps {
  value: number;
}

export interface IDigitState {
  clocksRotations: IClockRotation[][];
}