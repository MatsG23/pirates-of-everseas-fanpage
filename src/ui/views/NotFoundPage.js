import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import pirateShip from "../../media/pirate_ship.jpg";

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="height-full flex-center flex-column">
      <img
        alt="Pirate ship"
        src={pirateShip}
        height="55%"
        className="d-inline-block align-top mb-4"
      />
      <h1>{t("404_header")}</h1>
      <p className="text-uppercase">{t("404_piratesDestroyedIt")}</p>
      <p style={{ fontSize: "15px" }}>{t("404_confession")}</p>
      <Link to="/" className="btn btn-primary">
        {t("404_toHome")}
      </Link>
    </div>
  );
}
