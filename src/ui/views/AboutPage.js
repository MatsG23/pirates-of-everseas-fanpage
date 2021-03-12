import { useTranslation } from "react-i18next";

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="height-full p-3 d-flex flex-column justify-content-around align-content-center">
      <h1>{t("about_header")}</h1>
      <div className="fs-5">
        <ul>
          <li>
            {t("about_picBy")}
            <a
              href="https://pixabay.com/de/illustrations/schiff-piraten-piratenschiff-masten-109092"
              target="_blank"
              rel="noreferrer"
            >
              MakroWayland (Pixabay)
            </a>
          </li>
          <li>
            {t("about_picsBy")}
            <a
              href="https://github.com/wiredmax/react-flags/tree/master/vendor/flags/flags-iso/flat/32"
              target="_blank"
              rel="noreferrer"
            >
              wiredmax (Github)
            </a>
          </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
}
