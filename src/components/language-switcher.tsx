import { useTranslation } from "react-i18next"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <ToggleGroup
      variant="outline"
      value={[i18n.language]}
      onValueChange={(language) => {
        if (language) {
          i18n.changeLanguage(language[0])
        }
      }}
    >
      <ToggleGroupItem value="de">DE</ToggleGroupItem>
      <ToggleGroupItem value="en">EN</ToggleGroupItem>
    </ToggleGroup>
  )
}
