import { TimeZone } from "../interfaces/WorldTimeInterfaces";
import worldClockAPIInstance, {
  WORLD_TIME_TIME_ZONES,
} from "./worldTimeInstance";

export const getAllTimeZones = () => {
  return worldClockAPIInstance.get(WORLD_TIME_TIME_ZONES);
};

export const getTimeByTimeZone = (timezone: TimeZone) => {
  return worldClockAPIInstance.get(WORLD_TIME_TIME_ZONES + `/${timezone}`);
};
