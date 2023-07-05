import { ChangeEventHandler, useState } from "react";
import { NewTimer } from "../interfaces/TimerInterfaces";
import { v4 as uuidv4 } from "uuid";

export default function useAddTimerHook() {
  const id = uuidv4();
  const defaultNewTimer: NewTimer = {
    id,
    eventName: "",
    minutes: 0,
    seconds: 0,
  };
  const [newTimer, setNewTimer] = useState<NewTimer>(defaultNewTimer);
  const onChangeTime: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value: targetValue } = e.currentTarget;
    const value = isNaN(parseInt(targetValue)) ? 0 : parseInt(targetValue);
    setNewTimer({
      ...newTimer,
      [name]: value,
    });
  };
  const onChangeEventName: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;
    setNewTimer({
      ...newTimer,
      [name]: value,
    });
  };
  const onSetDefaultNewTimer = () => {
    setNewTimer(defaultNewTimer);
  };
  return {
    newTimer,
    onChangeEventName,
    onChangeTime,
    onSetDefaultNewTimer,
  };
}
