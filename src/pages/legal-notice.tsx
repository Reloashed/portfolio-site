import { useTranslation } from "react-i18next"

export default function LegalNotice() {
  const { t } = useTranslation()

  return (
    <div className="flex w-[20%] flex-col items-center justify-center text-center gap-4">
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