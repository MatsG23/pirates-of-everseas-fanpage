import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Template from "./Template";
import pirateShip from "../../media/pirate_ship.jpg";

export function NotFound() {
  const { t } = useTranslation("404");

  return (
    <Template>
      <img
        alt="Pirate ship"
        src={pirateShip}
        height="55%"
        className="d-inline-block align-top mb-4"
      />
      <h1>{t("header")}</h1>
      <p className="text-uppercase">{t("piratesDestroyedIt")}</p>
      <p style={{ fontSize: "15px" }}>{t("confession")}</p>
      <Link to="/" className="btn btn-primary">
        {t("toHome")}
      </Link>
    </Template>
  );
}
