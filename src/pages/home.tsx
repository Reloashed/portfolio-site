import type { Project } from "@/types/project.ts"
import { useTranslation } from "react-i18next"
import ProjectShowcase from "@/components/project-showcase.tsx"
import { Button } from "@/components/ui/button.tsx"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const projects = t("projects", { returnObjects: true }) as Project[]
  const services = t("services", { returnObjects: true }) as { label: string, description: string }[]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-30">
      <video
        autoPlay
        loop
        muted
        className="-mt-26 h-full w-full object-cover"
        src={"https://media.resh.video/arosa_classic_car_26_drift.mov"}
      ></video>
      <div className="flex w-full flex-col items-center justify-center">
        <ProjectShowcase
          title={projects[0].title}
          description={projects[0].description}
          videoSrc={projects[0].videoSrc}
          left={projects[0].left}
        />
        <div className="flex flex-col w-[60%]">
          <Button
            className="text-xl self-end"
            variant="ghost"
            onClick={() => navigate("/projects")}
          >
            {t("body.toProjects")}
            <IconArrowNarrowRight />
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <p className="text-4xl font-bold mb-6">{t("header.about")}</p>
        <div className="flex w-[40%] flex-col gap-4 text-gray-300">
          <p className="text-lg">{t("about.description")}</p>
          <p className="text-lg">{t("about.focus")}</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <p className="text-4xl font-bold mb-6">{t("header.contact")}</p>
        <div>
          <p className="text-2xl">{t("body.contactText")}</p>
        </div>
        <div className="flex flex-col w-[60%]">
          <Button
            className="text-xl self-end"
            variant="ghost"
            onClick={() => navigate("/contact")}
          >
            {t("body.toContact")}
            <IconArrowNarrowRight />
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
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
    </div>
  )
}
