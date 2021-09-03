import { ClockRotationType, IClockRotation } from "./models/clock-rotation.model";

export const MAX_SPINS: number = 3;
export const MIN_SPINS: number = 1;
export const MAX_SPINS_ITERATIONS: number = 10;

export const ClockRotations: Map<ClockRotationType, IClockRotation> = new Map<ClockRotationType, IClockRotation>([
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

export const ClockDigits: Map<number, IClockRotation[][]> = new Map([
  [0, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [1, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [2, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [3, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [4, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [5, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [6, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [7, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.K) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [8, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.G) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.H) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.J) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.I) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]],
  [9, [
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.A) as IClockRotation,
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.D) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.C) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation,
      ClockRotations.get(ClockRotationType.A) as IClockRotation
    ],
    [
      ClockRotations.get(ClockRotationType.E) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.B) as IClockRotation,
      ClockRotations.get(ClockRotationType.F) as IClockRotation
    ]
  ]]
]);