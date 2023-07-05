import { ButtonHTMLAttributes } from "react";
import "./Button.css";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
export default function Button(props: ButtonProps) {
  const { label, ...buttonProps } = props;
  return (
    <button className="button__control" {...buttonProps}>
      {props.label}
    </button>
  );
}
