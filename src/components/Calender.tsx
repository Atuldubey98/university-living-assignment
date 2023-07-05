import "./Calender.css";
export type Calender = {
  date: string;
  month: string;
  year: string;
};
export type CalenderProps = {
  calender: Calender;
};
export default function Calender(props: CalenderProps) {
  const { calender } = props;
  return (
    <div className="calender">
      <h1>{calender.date}</h1>
      <div className="calender__footer">
        {calender.month} / {calender.year}
      </div>
    </div>
  );
}
