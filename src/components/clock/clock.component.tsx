import { ClockProps } from "@components";
import { useAnimatedClock } from "@hooks";
import "./clock.css";

export function Clock({ hoursAngle, minutesAngle, digit }: ClockProps) {
  const { handles, animationsRunning, stopAnimations } = useAnimatedClock(hoursAngle, minutesAngle, digit);

  return (
    <div className={`clock ${animationsRunning ? "animate" : ""}`} onTransitionEnd={() => stopAnimations()}>
      <div className="wrap">
        <span className="hours" style={{ transform: `rotate(${handles.hours}deg)` }}></span>
        <span className="minutes" style={{ transform: `rotate(${handles.minutes}deg)` }}></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}
