import { useTranslation } from "react-i18next"

export default function Services() {
  const { t } = useTranslation()
  const services = t("services", { returnObjects: true }) as { label: string, description: string }[]

  return(
    <div className="flex w-full flex-col items-center justify-center">
      <p className="text-4xl font-bold">{t("header.services")}</p>
        <div className="m-6 grid w-full max-w-4xl grid-cols-1 gap-6 text-lg text-muted-foreground sm:grid-cols-2">
          {
            services.map((service: { label: string, description: string }, index: number) => (
              <div key={index}>
                <p className="font-bold">{service.label}</p>
                <p>{service.description}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}