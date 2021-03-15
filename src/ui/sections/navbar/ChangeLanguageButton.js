import { useTranslation } from "react-i18next";

export default function ChangeLanguageButton(props) {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="flex-around"
      onClick={() => i18n.changeLanguage(props.lang)}
      style={{ cursor: "pointer" }}
    >
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <img
                style={{ cursor: "pointer" }}
                src={props.src}
                height="30"
                width="30"
              />
            </td>
            <td valign="middle">
              <span className="ms-2">{t(`lang_${props.lang}`)}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
