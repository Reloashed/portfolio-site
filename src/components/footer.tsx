import { Button } from "@/components/ui/button.tsx"
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export default function Footer() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-between p-3 pr-20 pl-20 text-center text-sm">
      <p>resh.video</p>
      <div className="flex items-center gap-2">
        <Button className="h-9" variant="ghost">
          <IconBrandInstagram /> Instagram
        </Button>
        <Button className="h-9" variant="ghost">
          <IconBrandTiktok /> TikTok
        </Button>
        <Button className="h-9" variant="ghost">
          <IconBrandYoutube /> YouTube
        </Button>
        <Button
          className="h-9"
          variant="ghost"
          onClick={() => {
            window.location.href = `mailto:contact@resh.video?subject=${encodeURIComponent(
              t("footer.mailSubject")
            )}`
          }}
        >
          contact@resh.video
        </Button>
        <Button
          className="h-9"
          variant="ghost"
          onClick={() => navigate("/privacy")}
        >
          {t("footer.privacyNotice")}
        </Button>
        <Button
          className="h-9"
          variant="ghost"
          onClick={() => navigate("/legal")}
        >
          {t("footer.legalNotice")}
        </Button>
      </div>
      <p>&copy; {new Date().getFullYear()} resh.video. All rights reserved.</p>
    </div>
  )
}
