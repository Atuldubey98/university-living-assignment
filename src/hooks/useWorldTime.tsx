import { useState } from "react";
import { TimeZone, WorldTime } from "../interfaces/WorldTimeInterfaces";
import { getTimeByTimeZone } from "../api/worldTimeAPICalls";
import moment, { Moment } from "moment";
export default function useWorldTime() {
  const [wordtime, setWorldTime] = useState<WorldTime | null>(null);
  const [worldtimeLoading, setWorldTimeLoading] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<Moment | null>(null);
  moment();
  async function onTimeZoneSelect(timezone: TimeZone) {
    try {
      setWorldTimeLoading(true);
      const { data } = await getTimeByTimeZone(timezone);
      setWorldTime(data);
      setDateTime(null);
      setDateTime(moment.parseZone(data.datetime));
    } catch (error) {
    } finally {
      setWorldTimeLoading(false);
    }
  }
  const onChangeIncreaseSeconds = () => {
    setDateTime((prev) => {
      if (prev) {
        const updated = prev.add(1, "seconds");
        const newupdated = moment(updated);
        return newupdated;
      }
      return null;
    });
  };

  return {
    onTimeZoneSelect,
    wordtime,
    dateTime,
    worldtimeLoading,
    onChangeIncreaseSeconds,
  };
}
