import useAddTimer from "../hooks/useAddTimer";
import { NewTimer } from "../interfaces/TimerInterfaces";
import "./AddTimerForm.css";
import Button from "./Button";
import Input from "./Input";
export type AddTimerFormProps = {
  onSubmitAddTimerForm: (timer: NewTimer) => void;
  addTimerAndStart: (timer: NewTimer) => void;
};
export default function AddTimerForm(props: AddTimerFormProps) {
  const { onSubmitAddTimerForm, addTimerAndStart } = props;
  const { newTimer, onChangeEventName, onChangeTime, onSetDefaultNewTimer } =
    useAddTimer();
  const valid =
    (newTimer.eventName.length > 0 &&
      parseInt(newTimer.minutes.toString()) !== 0) ||
    parseInt(newTimer.seconds.toString()) !== 0;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (valid) {
      onSubmitAddTimerForm(newTimer);
      onSetDefaultNewTimer();
    }
  };
  const onAddAndStartTimer = () => {
    if (valid) {
      addTimerAndStart(newTimer);
      onSetDefaultNewTimer();
    }
  };
  const minutes =
    newTimer.minutes <= 0 ? `0${newTimer.minutes}` : newTimer.minutes;
  const seconds =
    newTimer.seconds <= 0 ? `0${newTimer.seconds}` : newTimer.seconds;
  return (
    <form className="timer__form" onSubmit={onSubmit}>
      <Input
        type="text"
        value={newTimer.eventName}
        minLength={1}
        maxLength={20}
        required
        name="eventName"
        onChange={onChangeEventName}
        placeholder="Event Name"
        style={{
          fontSize: "1.1rem",
          borderRadius: "0.2rem",
        }}
      />
      <div className="timer__clock d-flex-center">
        <Input
          name="minutes"
          onChange={onChangeTime}
          value={minutes}
          style={{
            fontSize: "3rem",
          }}
          placeholder="MM"
        />
        <Input
          name="seconds"
          value={seconds}
          required
          onChange={onChangeTime}
          minLength={1}
          style={{
            fontSize: "3rem",
          }}
          placeholder="SS"
        />
      </div>
      <div className="timer__formBtns d-flex-center">
        <Button disabled={!valid} type="submit" label="Add Timer" />
        <Button
          type="button"
          disabled={!valid}
          label="Add & Start Timer"
          onClick={onAddAndStartTimer}
        />
      </div>
    </form>
  );
}
