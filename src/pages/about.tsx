import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">{t("header.about")}</p>
      <div className="m-6 flex w-full max-w-3xl flex-col gap-4 text-lg leading-7 text-muted-foreground">
        <p>{t("about.description")}</p>
        <p>{t("about.focus")}</p>
      </div>
    </div>
  )
}