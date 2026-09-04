import { useTranslation } from "react-i18next"

export default function PrivacyNotice() {
  const { t } = useTranslation()

  return (
    <div className="flex w-[40%] flex-col items-center justify-center gap-8 text-justify">
      <div className="text-center">
        <p className="text-4xl font-bold">{t("footer.privacyNotice")}</p>
        <p className="text-sm text-gray-400">
          This privacy notice is only available in german
        </p>
      </div>
      <ul className="flex flex-col gap-2 self-start text-xl text-gray-300">
        <li>
          <strong>Verantwortlicher</strong>
        </li>
        <li>
          Remo Scherrer (resh.video), Rebbergweg 1, 8196 Wil ZH
          <br />
          contact@resh.video
        </li>
      </ul>
      <ul className="flex flex-col gap-2 self-start text-xl text-gray-300">
        <li>
          <strong>Bearbeitete Daten</strong>
        </li>
        <li>
          Diese Website kann ohne das preisgeben von persönlichen Daten genutzt
          werden.
          <br />
          Wenn Sie das Kontaktformular benutzen werden folgende Daten gesammelt:
          <br />
          <br />
          - Name
          <br />
          - Email Addresse
          <br />
          - Inhalt Ihrer Nachricht
          <br />
          - Sonstige Informationen welche Sie preisgeben
          <br />
          <br />
          Diese Daten werden nur genutzt um auf Ihre Anfrage zu antworten und
          werden nicht an Dritte weitergegeben.
        </li>
      </ul>
      <ul className="flex flex-col gap-2 self-start text-xl text-gray-300">
        <li>
          <strong>Website Hosting</strong>
        </li>
        <li>
          Diese Webseite wird von Vercel gehostet.
          <br />
          <br />
          Wenn Sie auf unsere Website zugreifen, können durch unseren
          Hosting-Anbieter technische Informationen verarbeitet werden. Dazu
          können beispielsweise Ihre IP-Adresse, Informationen über Ihren
          Browser und Ihr Gerät, Zeitstempel, aufgerufene Seiten sowie weitere
          technische Informationen gehören, die für den Betrieb, die Sicherheit
          und die Zuverlässigkeit der Website erforderlich sind.
          <br />
          <br />
          Vercel kann bestimmte Informationen im Rahmen der Bereitstellung
          seiner Hosting- und damit verbundenen Dienstleistungen verarbeiten.
          <br />
          <br />
          Weitere Informationen zu den Datenschutzpraktiken von Vercel finden
          Sie in der Datenschutzerklärung von Vercel.
        </li>
      </ul>
    </div>
  )
}