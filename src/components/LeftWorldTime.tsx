import { Moment } from "moment";
import useClockTimer from "../hooks/useClockTimer";
import Calender from "./Calender";
import "./LeftWorldTime.css";
import { getTwoZeroTime } from "../utils";
export type LeftWorldTimeProps = {
  datetime: Moment | null;
  onChangeIncreaseSeconds: () => void;
};

export default function LeftWorldTime(props: LeftWorldTimeProps) {
  const { datetime: utcDateTime } = props;

  useClockTimer([utcDateTime?.seconds()], () => {
    props.onChangeIncreaseSeconds();
  });
  const seconds = getTwoZeroTime(utcDateTime?.seconds() || 0);
  const minutes = getTwoZeroTime(utcDateTime?.minutes() || 0);
  const hours = getTwoZeroTime(utcDateTime?.hours() || 0);
  const month = utcDateTime?.format("MMMM") || "";
  const date = getTwoZeroTime(utcDateTime?.date() || 0) || "";
  const year = getTwoZeroTime(utcDateTime?.year() || 0) || "";
  return (
    <div className="left__worldtime">
      <div
        style={{
          fontSize: "1.1rem",
        }}
        className="clock__circle"
      >
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <Calender calender={{ date, year, month }} />
    </div>
  );
}
