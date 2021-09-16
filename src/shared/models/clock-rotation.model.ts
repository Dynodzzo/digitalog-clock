export enum ClockRotationType {
  A, B, C, D, E, F, G, H, I, J, K
}

export interface IClockRotation {
  type: ClockRotationType;
  hours: number;
  minutes: number;
}

export interface IClockState {
  rotation: IClockRotation;
  spins: IClockSpin;
}

export interface IClockSpin {
  hours: number;
  minutes: number;
}