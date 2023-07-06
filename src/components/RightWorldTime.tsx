import WorldTimeField from "./WorldTimeField";
export type RightWorldTimeProps = {
  abbreviation: string;
  timezone: string;
};
export default function RightWorldTime(props: RightWorldTimeProps) {
  const { abbreviation, timezone } = props;
  return (
    <div className="right__worldtimeWrapper d-flex-center">
      <div className="right__worldtime">
        <div className="right__worldtimeFields">
          <WorldTimeField value={abbreviation} label="Abbreviation" />
          <WorldTimeField value={timezone} label="Timezone" />
        </div>
      </div>
    </div>
  );
}
