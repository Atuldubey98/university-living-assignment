import { BounceLoader } from "react-spinners";
import LeftWorldTime from "../components/LeftWorldTime";
import PageLayout from "../components/PageLayout";
import TimeZoneSelectForm from "../components/TimeZoneSelectForm";
import WorldTimeField from "../components/WorldTimeField";
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

          <div className="right__worldtime">
            <div className="right__worldtimeFields">
              <WorldTimeField
                value={wordtime.abbreviation}
                label="Abbreviation"
              />
              <WorldTimeField value={wordtime.timezone} label="Timezone" />
            </div>
          </div>
        </section>
      ) : null}
    </PageLayout>
  );
}
