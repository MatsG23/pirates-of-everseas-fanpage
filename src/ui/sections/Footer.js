import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/Footer.css";
import { ModalOpener } from "../components/ModalOpener";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <div id="footer">
      <div className="flex-between flex-column" style={{ height: "100%" }}>
        <div className="flex-between w-100">
          <ModalOpener
            btnStyles="btn-outline-info w-25"
            modalTitle={t("contact")}
            btnTitle={t("contact")}
            id="modal1"
          >
            <p>{t("modalContent")}</p>
            <ul>
              <li>
                <b>Discord:</b> <i>Kaffee Lattes#0677</i>
              </li>
              <li>
                <b>Email:</b> <i>fanpage.poe (at) gmail.com</i> (
                {t("formatMailAddress")})
              </li>
            </ul>
          </ModalOpener>
          <button
            className="btn btn-outline-info w-25"
            onClick={() => window.scroll({ top: 0 })}
          >
            <i className="fas fa-3x fa-chevron-up" />
          </button>
          <button className="btn btn-outline-info w-25">Button</button>
        </div>
        <div>
          <span className="text-white">©{new Date().getUTCFullYear()}</span>
          <Link to="/about" className="link-primary ms-3">
            {t("about")}
          </Link>
          <Link to="/privacy" className="link-primary ms-2">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </div>
  );
}
