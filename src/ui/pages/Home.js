import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ShipBackgroundWithFilter } from "../components/all";

export function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <ShipBackgroundWithFilter>
        <h1 className="text-uppercase">{t("greeting")}</h1>
        <Link to="/wiki" className="btn btn-primary btn-lg">
          {t("toWiki")}
        </Link>
      </ShipBackgroundWithFilter>
      <div className="vh-100 p-50px flex-around flex-column">
        <h1 style={{ marginBottom: "5px" }}>{t("greeting2")}</h1>
        <p className="fs-5">
          Hi! <br />
          {t("introduction")}
        </p>

        <h3>{t("haveFun")}</h3>

        <Link to="/wiki" className="btn btn-primary btn-lg mx-auto">
          {t("toWiki")}
        </Link>
      </div>
    </>
  );
}
