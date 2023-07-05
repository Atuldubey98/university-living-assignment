export type WorldTimeFieldProps = {
  label: string;
  value?: string;
};
export default function WorldTimeField(props: WorldTimeFieldProps) {
  const { label, value } = props;
  return value ? (
    <div
      className="d-flex-center"
      style={{
        gap: "0.8rem",
        fontSize: "1.1rem",
        justifyContent: "flex-start",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
        }}
      >
        {label}
      </span>
      <span>:</span>
      <span>{value}</span>
    </div>
  ) : null;
}
