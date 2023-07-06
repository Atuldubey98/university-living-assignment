import { Moment } from "moment";
import { Timer } from "./interfaces/TimerInterfaces";

export const getTwoZeroTime = (time: number) => {
  return time >= 10 ? `${time}` : `0${time}`;
};
export const sortByTimerPausedOrNot = (timerA: Timer, timerB: Timer) => {
  return (timerA.isPaused ? 1 : 0) - (timerB.isPaused ? 1 : 0);
};

export const getDateTimeToDisplayByDate = (utcDateTime: Moment | null) => {
  const seconds = getTwoZeroTime(utcDateTime?.seconds() || 0);
  const minutes = getTwoZeroTime(utcDateTime?.minutes() || 0);
  const hours = getTwoZeroTime(utcDateTime?.hours() || 0);
  const month = utcDateTime?.format("MMMM") || "";
  const date = getTwoZeroTime(utcDateTime?.date() || 0) || "";
  const year = getTwoZeroTime(utcDateTime?.year() || 0) || "";
  return { seconds, minutes, hours, month, date, year };
};
