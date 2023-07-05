export type TimeZone = string;
export interface WorldTime {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_offset: number;
  raw_offset: number;
  timezone: TimeZone;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export interface DateTimeUTC {
  seconds: number;
  minutes: number;
  hours: number;
  date: number;
  month: number;
  year: number;
}
