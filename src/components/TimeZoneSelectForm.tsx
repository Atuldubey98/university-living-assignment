import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { TimeZone } from "../interfaces/WorldTimeInterfaces";
import Button from "./Button";
import "./TimeZoneSelectForm.css";
import useWorldTimeZones from "../hooks/useWorldTimeZones";
export type TimeZoneSelectFormProps = {
  onTimeZoneSelect: (timezone: TimeZone) => void;
};
export default function TimeZoneSelectForm(props: TimeZoneSelectFormProps) {
  const { timeZones } = useWorldTimeZones();

  const { onTimeZoneSelect } = props;
  const defaultTimeZone =
    timeZones.length > 0 ? timeZones[0] : "Africa/Abidjan";
  const [selectedTimeZone, setSelectedTimeZone] =
    useState<string>(defaultTimeZone);
  const onChangeTimeZone: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.currentTarget.value;
    setSelectedTimeZone(value);
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onTimeZoneSelect(selectedTimeZone);
  };
  return timeZones.length > 0 ? (
    <form className="timezones__form" onSubmit={onSubmit}>
      <select
        onChange={onChangeTimeZone}
        value={selectedTimeZone}
        name="timezone"
        id="timezone"
      >
        {timeZones.map((timezone) => (
          <option value={timezone} key={timezone}>
            {timezone}
          </option>
        ))}
      </select>
      <div className="d-flex-center">
        <Button label="Get time" type="submit" />
      </div>
    </form>
  ) : null;
}