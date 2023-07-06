import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { Timer } from "../interfaces/TimerInterfaces";
import "./ClockTimer.css";

import classNames from "classnames";
import { FaPause, FaPlay } from "react-icons/fa";
import useClockTimer from "../hooks/useClockTimer";
import IconButton from "./IconButton";
import { getTwoZeroTime } from "../utils";
import ClockCircle from "./ClockCircle";

export interface ClockTimerProps {
  timer: Timer;
  updateTimerById: (updatedTimer: Timer) => void;
  deleteTimerById: (timerId: string) => void;
}
export default function ClockTimer(props: ClockTimerProps) {
  const { timer, updateTimerById, deleteTimerById } = props;
  const {
    seconds: totalSeconds,
    eventName,
    isPaused,
    initialSeconds,
    id,
  } = timer;
  const seconds = totalSeconds % 60;
  const minutes = parseInt((totalSeconds / 60).toString());
  useClockTimer([isPaused, seconds], updateTimer);
  const onStartTimer = () => {
    updateTimerById({ ...timer, isPaused: false });
  };
  const onPauseTimer = () => {
    updateTimerById({ ...timer, isPaused: true });
  };
  const onDeleteTimer = () => {
    deleteTimerById(id);
  };
  const onResetTimer = () => {
    updateTimerById({
      ...timer,
      seconds: timer.initialSeconds,
      isPaused: true,
    });
  };
  function updateTimer() {
    if (!isPaused) {
      updateTimerById({ ...timer, seconds: totalSeconds - 1 });
      console.log("Called");
    }
  }
  const showResumeButton = initialSeconds !== totalSeconds;

  const hasTimerEnded = totalSeconds === 0;
  return (
    <li
      className={classNames("clock__timer", {
        clock__paused: isPaused,
        clock__playing: !isPaused,
      })}
    >
      <div className="clock__timerHeader">
        <p>{eventName}</p>
        <AiOutlineCloseCircle
          className="cursor-pointer"
          size={28}
          onClick={onDeleteTimer}
        />
      </div>
      <section className="clock__wrapper">
        <ClockCircle>
          <span>{getTwoZeroTime(minutes)}</span>
          <span>:</span>
          <span>{getTwoZeroTime(seconds)}</span>
        </ClockCircle>
        <div className="clock__btns">
          {hasTimerEnded ? null : (
            <div className="clock__btns">
              {isPaused ? (
                <IconButton onClick={onStartTimer} type="success">
                  <FaPlay color="white" />
                  <span>{showResumeButton ? "Resume" : "Start"}</span>
                </IconButton>
              ) : (
                <IconButton onClick={onPauseTimer} type="success">
                  <FaPause color="white" />
                  <span>Pause</span>
                </IconButton>
              )}
            </div>
          )}
          <IconButton onClick={onResetTimer} type="danger">
            <GrPowerReset color="white" />
            <span>Reset</span>
          </IconButton>
        </div>
      </section>
    </li>
  );
}
