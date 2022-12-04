import { useState } from "react";
import { useInterval } from "@hooks";
import { Digit } from "@components";
import { UNKNOWN_DIGIT } from "@shared";
import "./digitalog.css";

export function Digitalog() {
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");

  const updateClockDigits = (): void => {
    const now: Date = new Date();
    setHours(`0${now.getHours()}`.slice(-2));
    setMinutes(`0${now.getMinutes()}`.slice(-2));
  };

  useInterval(() => {
    updateClockDigits();
  }, 1000);

  const getDigitValue = (value: string): number => {
    if (!value) return UNKNOWN_DIGIT;
    return Number(value);
  };

  return (
    <div className="digitalog-clock">
      <div className="digits">
        <Digit value={getDigitValue(hours[0])} />
        <Digit value={getDigitValue(hours[1])} />
      </div>
      <div className="digits">
        <Digit value={getDigitValue(minutes[0])} />
        <Digit value={getDigitValue(minutes[1])} />
      </div>
    </div>
  );
}
