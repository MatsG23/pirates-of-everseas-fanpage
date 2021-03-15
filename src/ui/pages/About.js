import { useTranslation } from "react-i18next";
import Template from "./Template";

export function About() {
  const { t } = useTranslation("about");

  return (
    <Template>
      <h1 className="mb-5">{t("header")}</h1>
      <div className="fs-5">
        <ul>
          <li>
            {t("picBy")}
            <a
              href="https://pixabay.com/de/illustrations/schiff-piraten-piratenschiff-masten-109092"
              target="_blank"
              rel="noreferrer external"
            >
              MakroWayland (Pixabay)
            </a>
          </li>
          <li>
            {t("picsBy")}
            <a
              href="https://github.com/wiredmax/react-flags/tree/master/vendor/flags/flags-iso/flat/32"
              target="_blank"
              rel="noreferrer external"
            >
              wiredmax (Github)
            </a>
          </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
      </div>
    </Template>
  );
}
