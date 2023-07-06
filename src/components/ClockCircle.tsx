export type ClockCircleProps = {
  children?: React.ReactNode;
};
export default function ClockCircle(props: ClockCircleProps) {
  return (
    <div className="clock__circle">
      <div className="clock__left clock__ears"></div>
      <div className="clock__right clock__ears"></div>
      {props.children}
      <div className="clock__stand"></div>
    </div>
  );
}
