import ChangeLanguageButton from "./ChangeLanguageButton";
import germanFlag from "../../../media/DE.png";
import usFlag from "../../../media/US.png";

export default function LanguageDropdown() {
  const getDivider = () => (
    <li>
      <hr className="dropdown-divider" />
    </li>
  );

  return (
    <div className="dropdown me-auto">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownLanguageButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-globe-europe" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownLanguageButton">
        <li>
          <div className="dropdown-item">
            <ChangeLanguageButton src={germanFlag} lang="de" />
          </div>
        </li>
        {getDivider()}
        <li>
          <div className="dropdown-item">
            <ChangeLanguageButton src={usFlag} lang="en" />
          </div>
        </li>
      </ul>
    </div>
  );
}
