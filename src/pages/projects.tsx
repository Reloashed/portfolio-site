import { useTranslation } from "react-i18next"
import ProjectShowcase from "@/components/project-showcase.tsx"
import type { Project } from "@/types/project.ts"

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true }) as Project[]

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col">
      <div className="mb-8 flex items-end justify-between gap-4 border-b border-border/70 pb-5 sm:mb-12 sm:pb-7">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("header.projects")}</h1>
        <span className="pb-1 text-sm tabular-nums text-muted-foreground">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>
      <div className="flex w-full flex-col gap-8 sm:gap-12">
        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.videoSrc || index}
            title={project.title}
            description={project.description}
            videoSrc={project.videoSrc}
            left={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}
