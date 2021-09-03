import { IClockRotation } from "../../shared/models/clock-rotation.model";

export interface IDigitProps {
  value: number;
}

export interface IDigitState {
  clocksRotations: IClockRotation[][];
}