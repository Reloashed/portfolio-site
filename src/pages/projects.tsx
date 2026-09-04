import { useTranslation } from "react-i18next"
import ProjectShowcase from "@/components/project-showcase.tsx"
import type { Project } from "@/types/project.ts"

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true }) as Project[]

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">{t("header.projects")}</p>
      {
        projects.map((project, index) => (
          <ProjectShowcase
            key={index}
            title={project.title}
            description={project.description}
            videoSrc={project.videoSrc}
            left={project.left}
          />
        ))
      }
    </div>
  )
}
