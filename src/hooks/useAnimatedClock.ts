import { ClockHandles } from "@components";
import { MAX_SPINS, MIN_SPINS, randomInt } from "@shared";
import { useEffect, useState } from "react";

export function useAnimatedClock(hoursAngle: number, minutesAngle: number, digit: number) {
  const [animationsRunning, setAnimationsRunning] = useState<boolean>(false);
  const [spins, setSpins] = useState<ClockHandles>({ hours: 0, minutes: 0 });
  const [handles, setHandles] = useState<ClockHandles>({ hours: hoursAngle, minutes: minutesAngle });

  const stopAnimations = () => setAnimationsRunning(false);
  const reset = () => setSpins({ hours: 0, minutes: 0 });

  useEffect(() => {
    setSpins({
      hours: randomInt(MIN_SPINS, MAX_SPINS),
      minutes: randomInt(MIN_SPINS, MAX_SPINS),
    });
    setAnimationsRunning(true);
  }, [digit]);

  useEffect(() => {
    setHandles({
      hours: hoursAngle + spins.hours * 360,
      minutes: minutesAngle + spins.minutes * 360,
    });
  }, [spins]);

  useEffect(() => {
    if (!animationsRunning) reset();
  }, [animationsRunning]);

  return { handles, animationsRunning, stopAnimations };
}
