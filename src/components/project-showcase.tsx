import type { Project } from "@/types/project.ts"

type VideoProps = {
  videoSrc: string
}

function Video({ videoSrc }: VideoProps) {
  return (
    <video
      controls
      playsInline
      preload="metadata"
      className="aspect-video w-full rounded-md bg-black object-contain"
      src={videoSrc}
    />
  )
}

type TextProps = {
  title: string
  description: string
}

function Text({ title, description }: TextProps) {
  return (
    <div className="min-w-0 py-2">
      <p className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</p>
      <p className="text-pretty leading-7 text-muted-foreground">{description}</p>
    </div>
  )
}

export default function ProjectShowcase({ title, description, videoSrc, left }: Project) {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-5 border-b border-border/70 pb-8 md:grid-cols-2 md:gap-10">
      <div className={`min-w-0 ${left ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
        <Video videoSrc={videoSrc} />
      </div>
      <div className={`min-w-0 ${left ? "order-2 md:order-2" : "order-2 md:order-1"}`}>
        <Text title={title} description={description} />
      </div>
    </div>
  )
}