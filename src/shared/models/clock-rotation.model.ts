export enum ClockRotationType {
  A, B, C, D, E, F, G, H, I, J, K
}

export interface IClockRotation {
  type: ClockRotationType;
  minutes: number;
  hours: number;
}