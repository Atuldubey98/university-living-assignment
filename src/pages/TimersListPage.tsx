import AddTimerForm from "../components/AddTimerForm";
import ClockTimer from "../components/ClockTimer";
import PageLayout from "../components/PageLayout";
import useTimersList from "../hooks/useTimersList";
import { NewTimer } from "../interfaces/TimerInterfaces";
import { sortByTimerPausedOrNot } from "../utils";
import "./TimersListPage.css";
export default function TimersListPage() {
  const onSubmitAddTimerForm = (newTimer: NewTimer) => {
    addTimer(newTimer);
  };
  const {
    addTimer,
    timers,
    updateTimerById,
    deleteTimerById,
    addTimerAndStart,
  } = useTimersList();
  return (
    <PageLayout>
      <section>
        <AddTimerForm
          onSubmitAddTimerForm={onSubmitAddTimerForm}
          addTimerAndStart={addTimerAndStart}
        />
      </section>
      <section>
        <ul className="timers__list">
          {timers.sort(sortByTimerPausedOrNot).map((timer) => (
            <ClockTimer
              timer={timer}
              key={timer.id}
              updateTimerById={updateTimerById}
              deleteTimerById={deleteTimerById}
            />
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
