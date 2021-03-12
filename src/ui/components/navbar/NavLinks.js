import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import germanFlag from "../../../media/DE.png";
import usFlag from "../../../media/US.png";

export default function NavLinks() {
  const i18n = useTranslation()[1];

  function getToggle() {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#linksDropdown"
      >
        <span className="navbar-toggler-icon" />
      </button>
    );
  }

  return (
    <>
      <div className="ms-auto me-3">
        <img
          style={{ cursor: "pointer" }}
          alt="German"
          onClick={() => i18n.changeLanguage("de")}
          src={germanFlag}
          height="30"
          width="30"
        />
        <img
          style={{ cursor: "pointer" }}
          alt="English"
          className="ms-1"
          onClick={() => i18n.changeLanguage("en")}
          src={usFlag}
          height="30"
          width="30"
        />
      </div>
      {getToggle()}
      <div className="collapse navbar-collapse" id="linksDropdown">
        <ul className="navbar-nav ms-auto">
          <NavLink to="/" text="Home" />
          <NavLink to="/nomatch" text="Link" />
        </ul>
      </div>
    </>
  );
}
