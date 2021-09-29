export interface IClockProps {
  hoursAngle: number;
  minutesAngle: number;
  digit: number;
}

export interface IClockState {
  randomSpinsHours: number;
  randomSpinsMinutes: number;
  animate: boolean;
}