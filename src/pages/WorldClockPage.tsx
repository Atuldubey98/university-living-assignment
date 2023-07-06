import { BounceLoader } from "react-spinners";
import LeftWorldTime from "../components/LeftWorldTime";
import PageLayout from "../components/PageLayout";
import RightWorldTime from "../components/RightWorldTime";
import TimeZoneSelectForm from "../components/TimeZoneSelectForm";
import useWorldTime from "../hooks/useWorldTime";
import "./WorldClockPage.css";
export default function WorldClockPage() {
  const {
    onTimeZoneSelect,
    wordtime,
    dateTime,
    onChangeIncreaseSeconds,
    worldtimeLoading,
  } = useWorldTime();

  return (
    <PageLayout>
      <TimeZoneSelectForm onTimeZoneSelect={onTimeZoneSelect} />
      {worldtimeLoading ? (
        <div className="d-flex-center">
          <BounceLoader color="var(--primary-color)" />
        </div>
      ) : wordtime ? (
        <section className="wordtime">
          <LeftWorldTime
            datetime={dateTime}
            onChangeIncreaseSeconds={onChangeIncreaseSeconds}
          />
          <RightWorldTime
            abbreviation={wordtime.abbreviation}
            timezone={wordtime.timezone}
          />
        </section>
      ) : null}
    </PageLayout>
  );
}
