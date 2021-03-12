import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/LandingPage.css";

export function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="ship-bg height-full">
        <div className="height-full flex-center flex-column link-light bg-filter-grey">
          <h1 className="text-uppercase">{t("home_greeting")}</h1>
          <Link to="/wiki" className="btn btn-primary btn-lg">
            {t("home_toWiki")}
          </Link>
        </div>
      </div>
      <div className="height-full p-50px d-flex justify-content-around align-content-center flex-column">
        <h1 style={{ marginBottom: "5px" }}>{t("home_greeting2")}</h1>
        <p className="fs-5">
          Hi! <br />
          {t("home_introduction")}
        </p>

        <h3>{t("home_haveFun")}</h3>

        <div className="flex-center d-flex justify-content-between align-content-center">
          <Link to="#" className="btn btn-outline-primary btn-lg">
            Link
          </Link>
          <Link
            to="/wiki"
            className="btn btn-outline-primary btn-lg"
            style={{ flexGrow: ".5" }}
          >
            {t("home_toWiki")}
          </Link>
          <Link to="#" className="btn btn-outline-primary btn-lg">
            Link
          </Link>
        </div>
      </div>
    </>
  );
}
