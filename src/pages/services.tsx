import { useTranslation } from "react-i18next"

export default function Services() {
  const { t } = useTranslation()
  const services = t("services", { returnObjects: true }) as { label: string, description: string }[]

  return(
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">{t("header.services")}</p>
        <div className="grid grid-cols-2 gap-6 m-6 text-lg text-gray-300 text-justify">
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