import { Link } from "react-router-dom";
import "./Header.css";
import Banner from "./Banner";
export default function Header() {
  return (
    <header>
      <Banner />
      <ul className="d-flex-center">
        <li>
          <Link to={"/"}>Event Timers</Link>
        </li>
        <li>
          <Link to={"/world-clock"}>World Clock</Link>
        </li>
      </ul>
    </header>
  );
}
