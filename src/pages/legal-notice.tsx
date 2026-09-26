import { useTranslation } from "react-i18next"

export default function LegalNotice() {
  const { t } = useTranslation()

  return (
    <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 text-center">
      <p className="text-4xl font-bold">{t("footer.legalNotice")}</p>
      <ul className="flex flex-col gap-2 text-xl text-gray-300">
        <li>
          <strong>Remo Scherrer</strong>
        </li>
        <li>
          <strong>
            Rebbergweg 1<br />
            8196 Wil ZH, Schweiz
          </strong>
        </li>
        <li>E-Mail: <strong>contact@resh.video</strong></li>
      </ul>
    </div>
  )
}