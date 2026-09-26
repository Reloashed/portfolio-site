import { Button } from "@/components/ui/button.tsx"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/components/language-switcher.tsx"

export default function Header() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
      <img
        className="h-12 cursor-pointer sm:h-15"
        src="/resh-logo-dark.svg"
        onClick={() => navigate("/")}
        alt="resh.video"
      />
      <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto sm:justify-end sm:gap-8">
        <nav className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-2">
          <Button className="cursor-pointer" variant="ghost" onClick={() => navigate("/projects")}>
            {t("header.projects")}
          </Button>
          <Button className="cursor-pointer" variant="ghost" onClick={() => navigate("/services")}>
            {t("header.services")}
          </Button>
          <Button className="cursor-pointer" variant="ghost" onClick={() => navigate("/about")}>
            {t("header.about")}
          </Button>
          <Button className="cursor-pointer" variant="ghost" onClick={() => navigate("/contact")}>
            {t("header.contact")}
          </Button>
        </nav>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
      </div>
    </header>
  )
}