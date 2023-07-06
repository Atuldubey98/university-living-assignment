import logo from "../assets/clock.svg";

export default function Banner() {
  return (
    <section className="header__banner d-flex-center">
      <img src={logo} alt="logo" width={50} />
      <h2>TimeSync-Hub</h2>
    </section>
  );
}
