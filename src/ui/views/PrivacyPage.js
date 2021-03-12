import { useTranslation } from "react-i18next";

export function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="height-full d-flex justify-content-center align-content-center flex-column p-3">
      <h1 className="mb-5">Datenschutz</h1>

      <p className="text-danger">{t("privacy_onlyEU")}</p>

      <div className="overflow-auto" style={{ height: "200%", width: "100%" }}>
        <h4>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h4>
        <p>
          Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
          Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen
          ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der
          Sitz unseres Unternehmens befindet.{" "}
          <a
            href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
            target="_blank"
            rel="noreferrer"
          >
            Dieser
          </a>{" "}
          Link stellt eine Liste der Datenschutzbeauftragten sowie deren
          Kontaktdaten bereit:
        </p>

        <h4>Recht auf Datenübertragbarkeit</h4>
        <p>
          Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
          Einwilligung oder in Erfüllung eines Vertrags automatisiert
          verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
          Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
          die direkte Übertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>

        <h4>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h4>
        <p>
          Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu
          weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an
          uns wenden.
        </p>

        <h4>SSL- bzw. TLS-Verschlüsselung</h4>
        <p>
          Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
          Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
          über diese Website übermitteln, für Dritte nicht mitlesbar. Sie
          erkennen eine verschlüsselte Verbindung an dem <i>https://</i> und dem
          Schloss-Symbol bei der Adresszeile ihres Browsers.
        </p>

        <h4>Server-Log-Dateien</h4>
        <p>
          In Server-Log-Dateien erhebt und speichert der Provider der Website
          automatisch Informationen, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </p>
        <ul>
          <li>Besuchte Seite auf unserer Domain</li>
          <li>Datum und Uhrzeit der Serveranfrage</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Externe IP-Adresse</li>
        </ul>
        <p>
          Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen
          statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b
          DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags
          oder vorvertraglicher Maßnahmen gestattet.
        </p>
      </div>
    </div>
  );
}
