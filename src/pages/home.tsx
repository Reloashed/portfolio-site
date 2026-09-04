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
  
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20">
      <video
        autoPlay
        loop
        muted
        className="-mt-26 h-full w-full object-cover"
        src={"/media/hero.mp4"}
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
    </div>
  )
}
