import { useEffect, useReducer } from "react";
import { NewTimer, Timer } from "../interfaces/TimerInterfaces";
import useLocalStorage from "./useLocalStorage";

export default function useTimersList() {
  const { getFromLocalStorage, setLocalStorage } = useLocalStorage("timers");

  type State = {
    timers: Timer[];
  };
  type Action =
    | { type: "timer:add"; payload: Timer }
    | { type: "timer:update"; payload: Timer }
    | { type: "timer:addAll"; payload: Timer[] }
    | { type: "timer:delete"; payload: string };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "timer:add":
        return {
          ...state,
          timers: [action.payload, ...state.timers],
        };
      case "timer:update":
        return {
          ...state,
          timers: state.timers.map((timer) =>
            timer.id === action.payload.id ? action.payload : timer
          ),
        };
      case "timer:delete":
        return {
          ...state,
          timers: state.timers.filter((timer) => timer.id !== action.payload),
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    timers: Array.isArray(getFromLocalStorage()) ? getFromLocalStorage() : [],
  });
  const { timers } = state;
  useEffect(() => {
    setLocalStorage(timers);
  }, [state]);
  function addTimer(newTimer: NewTimer) {
    const { seconds, minutes, eventName, id } = newTimer;
    const initialSeconds = minutes * 60 + seconds;
    const timer: Timer = {
      seconds: initialSeconds,
      eventName,
      initialSeconds,
      id,
      isPaused: true,
    };
    dispatch({ type: "timer:add", payload: timer });
  }
  const addTimerAndStart = (newTimer: NewTimer) => {
    const { seconds, minutes, eventName, id } = newTimer;
    const initialSeconds = minutes * 60 + seconds;
    const timer: Timer = {
      seconds: initialSeconds,
      eventName,
      initialSeconds,
      id,
      isPaused: false,
    };
    dispatch({ type: "timer:add", payload: timer });
  };
  function updateTimerById(updatedTimer: Timer) {
    if (updatedTimer.seconds >= 0) {
      dispatch({ type: "timer:update", payload: updatedTimer });
    } else {
      dispatch({
        type: "timer:update",
        payload: {
          ...updatedTimer,
          isPaused: true,
          seconds: 0,
        },
      });
    }
  }
  function deleteTimerById(timerId: string) {
    dispatch({ type: "timer:delete", payload: timerId });
  }

  return {
    timers,
    addTimer,
    updateTimerById,
    deleteTimerById,
    addTimerAndStart,
  };
}
