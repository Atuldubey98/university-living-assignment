import axios from "axios";

const worldClockAPIInstance = axios.create({
  baseURL: "https://worldtimeapi.org/api",
});

export default worldClockAPIInstance;
export const WORLD_TIME_TIME_ZONES = "/timezone";
