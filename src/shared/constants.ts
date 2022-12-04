export enum ClockRotationType {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
}

export type ClockRotation = {
  type: ClockRotationType;
  minutes: number;
  hours: number;
};

export type DigitClocks = ClockRotation[][];

export const MAX_SPINS: number = 3;
export const MIN_SPINS: number = 1;
export const UNKNOWN_DIGIT: number = 10;

export let ClockRotations: Map<ClockRotationType, ClockRotation> = new Map<ClockRotationType, ClockRotation>([
  [ClockRotationType.A, { type: ClockRotationType.A, minutes: 0, hours: 180 }],
  [ClockRotationType.B, { type: ClockRotationType.B, minutes: 90, hours: 270 }],
  [ClockRotationType.C, { type: ClockRotationType.C, minutes: 90, hours: 180 }],
  [ClockRotationType.D, { type: ClockRotationType.D, minutes: 270, hours: 180 }],
  [ClockRotationType.E, { type: ClockRotationType.E, minutes: 90, hours: 0 }],
  [ClockRotationType.F, { type: ClockRotationType.F, minutes: 270, hours: 0 }],
  [ClockRotationType.G, { type: ClockRotationType.G, minutes: 0, hours: 135 }],
  [ClockRotationType.H, { type: ClockRotationType.H, minutes: 0, hours: 225 }],
  [ClockRotationType.I, { type: ClockRotationType.I, minutes: 180, hours: 315 }],
  [ClockRotationType.J, { type: ClockRotationType.J, minutes: 180, hours: 45 }],
  [ClockRotationType.K, { type: ClockRotationType.K, minutes: 225, hours: 225 }],
]);

export const DigitsClocks: Map<number, ClockRotation[][]> = new Map([
  [
    0,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    1,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    2,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    3,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    4,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    5,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    6,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    7,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    8,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.G) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.H) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.J) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.I) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    9,
    [
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.D) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.C) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
        ClockRotations.get(ClockRotationType.A) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.E) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.B) as ClockRotation,
        ClockRotations.get(ClockRotationType.F) as ClockRotation,
      ],
    ],
  ],
  [
    10,
    [
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
      [
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
        ClockRotations.get(ClockRotationType.K) as ClockRotation,
      ],
    ],
  ],
]);
