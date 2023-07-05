import { Link } from "react-router-dom";
import logo from "../assets/clock.svg";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <section className="header__banner d-flex-center">
        <img src={logo} alt="logo" width={50} />
        <h2>TimeSync-Hub</h2>
      </section>
      <ul className="d-flex-center">
        <li>
          <Link to={"/"}>Event Timers</Link>
        </li>
        <li>
          <Link to={"/"}>World Clock</Link>
        </li>
      </ul>
    </header>
  );
}
