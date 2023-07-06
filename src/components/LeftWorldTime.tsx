import { Moment } from "moment";
import useClockTimer from "../hooks/useClockTimer";
import Calender from "./Calender";
import "./LeftWorldTime.css";
import { getDateTimeToDisplayByDate } from "../utils";
import ClockCircle from "./ClockCircle";
export type LeftWorldTimeProps = {
  datetime: Moment | null;
  onChangeIncreaseSeconds: () => void;
};

export default function LeftWorldTime(props: LeftWorldTimeProps) {
  const { datetime: utcDateTime } = props;

  useClockTimer([utcDateTime?.seconds()], () => {
    props.onChangeIncreaseSeconds();
  });
  const { seconds, minutes, hours, month, date, year } =
    getDateTimeToDisplayByDate(utcDateTime);
  return (
    <div className="left__worldtime">
      <ClockCircle>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </ClockCircle>
      <Calender calender={{ date, year, month }} />
    </div>
  );
}
