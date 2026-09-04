import type { Project } from "@/types/project.ts"

type VideoProps = {
  videoSrc: string
}

function Video({ videoSrc }: VideoProps) {
  return (
    <div className="shrink-0">
      <video controls className="h-80 w-auto" src={videoSrc} />
    </div>
  )
}

type TextProps = {
  title: string
  description: string
}

function Text({ title, description }: TextProps) {
  return (
    <div className="min-w-0 flex-1 m-3">
      <p className="text-xl font-bold mb-2">{title}</p>
      <p className="text-justify text-gray-300">{description}</p>
    </div>
  )
}

export default function ProjectShowcase({ title, description, videoSrc, left }: Project) {
  return (
    <div className="mt-10 flex w-[60%]">
      {left ? (
        <>
          <Video videoSrc={videoSrc} />
          <Text title={title} description={description} />
        </>
      ) : (
        <>
          <Text title={title} description={description} />
          <Video videoSrc={videoSrc} />
        </>
      )}
    </div>
  )
}