import { Button } from "@/components/ui/button.tsx"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/components/language-switcher.tsx"

export default function Header() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="full-width flex items-center justify-between p-6 sticky top-0">
      <img
        className="h-15 cursor-pointer"
        src="/resh-logo-dark.svg"
        onClick={() => navigate("/")}
        alt="resh.video"
      />
      <div className={"flex items-center gap-8"}>
        <div className={"flex gap-2"}>
          <Button variant="ghost" onClick={() => navigate("/projects")}>
            {t("header.projects")}
          </Button>
          <Button variant="ghost" onClick={() => navigate("/services")}>
            {t("header.services")}
          </Button>
          <Button variant="ghost" onClick={() => navigate("/about")}>
            {t("header.about")}
          </Button>
          <Button variant="ghost" onClick={() => navigate("/contact")}>
            {t("header.contact")}
          </Button>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}