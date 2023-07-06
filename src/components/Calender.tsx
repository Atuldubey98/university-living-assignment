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
      {Array.from({ length: 6 }, (_, index) => index).map((spiral) => (
        <div key={spiral} className="calender__spiral"></div>
      ))}
      <h1>{calender.date}</h1>
      <div className="calender__footer">
        {calender.month} / {calender.year}
      </div>
    </div>
  );
}
