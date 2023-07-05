import classNames from "classnames";
import "./IconButton.css";

export interface IconButtonProps {
  type: "success" | "danger";
  onClick: () => void;
  children?: React.ReactNode;
}
export default function IconButton(props: IconButtonProps) {
  return (
    <div
      onClick={props.onClick}
      className={classNames(`icon__btn d-flex-center ${props.type}`)}
    >
      {props.children}
    </div>
  );
}
