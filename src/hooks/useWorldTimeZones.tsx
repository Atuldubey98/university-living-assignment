import { useEffect, useState } from "react";
import { TimeZone } from "../interfaces/WorldTimeInterfaces";
import { getAllTimeZones } from "../api/worldTimeAPICalls";

export default function useWorldTimeZones() {
  const [timeZones, setTimeZones] = useState<TimeZone[]>([]);
  const [timeZoneLoading, setTimeZoneLoading] = useState<boolean>(true);
  const [timeZoneLoadFailure, setTimeZoneLoadFailure] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllTimeZones();
        setTimeZones(data);
      } catch (error) {
        setTimeZoneLoadFailure("Error occured");
      } finally {
        setTimeZoneLoading(false);
      }
    })();
  }, []);
  return { timeZones, timeZoneLoading, timeZoneLoadFailure };
}
