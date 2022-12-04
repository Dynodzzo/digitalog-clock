import { useEffect, useState } from "react";
import { DigitProps, Clock } from "@components";
import { DigitsClocks, DigitClocks, ClockRotation } from "@shared";
import "./digit.css";

export function Digit({ value }: DigitProps) {
  const getDigitClocks = (value: number): DigitClocks => {
    return DigitsClocks.get(value) as DigitClocks;
  };

  const [digitClocks, setDigitClocks] = useState<DigitClocks>(getDigitClocks(value));

  useEffect(() => {
    setDigitClocks(getDigitClocks(value));
  }, [value]);

  return (
    <div className="digit">
      {digitClocks.map((clocksLine: ClockRotation[], clocksLineIndex: number) => {
        return (
          <div key={`clocksLine-${clocksLineIndex}`} className="clocksRow">
            {clocksLine.map((clock: ClockRotation, clockIndex: number) => {
              return (
                <Clock key={`clock-${clocksLineIndex}${clockIndex}`} hoursAngle={clock.hours} minutesAngle={clock.minutes} digit={value} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
