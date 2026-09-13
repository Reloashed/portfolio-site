import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">{t("header.about")}</p>
      <div className="flex flex-col gap-4 w-[30%] m-6 text-lg text-gray-300 text-justify">
        <p>{t("about.description")}</p>
        <p>{t("about.focus")}</p>
      </div>
    </div>
  )
}