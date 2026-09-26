import { useState } from "react"
import { de, enUS } from "date-fns/locale"
import { CalendarDays } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type FormStatus = "idle" | "sending" | "sent" | "error"

function formatDateValue(date?: Date) {
  if (!date) return ""

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export default function Contact() {
  const { t, i18n } = useTranslation()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  const [dateError, setDateError] = useState(false)
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!selectedDate) {
      setDateError(true)
      setDatePickerOpen(true)
      return
    }

    setDateError(false)
    setStatus("sending")

    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const payload = Object.fromEntries(form.entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error("Contact request failed")

      formElement.reset()
      setSelectedDate(undefined)
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const items = t("contact.items", { returnObjects: true }) as { label: string, value: string }[]

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-4xl font-bold mb-6">{t("header.contact")}</p>
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <Input
          name="name"
          placeholder="Name"
          required
        />

        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />

        <Input
          name="organisation"
          placeholder="Team / Organisation"
        />

        <Select required name="projectType" items={items}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t("contact.projectType")} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
          <PopoverTrigger
            render={
              <Button
                type="button"
                variant="outline"
                className="w-full justify-start text-left font-normal"
                aria-label={t("contact.date")}
                aria-required="true"
                aria-invalid={dateError}
                aria-describedby={dateError ? "project-date-error" : undefined}
              >
                <CalendarDays className="mr-2 size-4" />
                {selectedDate
                  ? new Intl.DateTimeFormat(i18n.language, { dateStyle: "long" }).format(selectedDate)
                  : t("contact.date")}
              </Button>
            }
          />
          <PopoverContent align="start" className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date)
                setDateError(false)
                setDatePickerOpen(false)
              }}
              locale={i18n.language.startsWith("de") ? de : enUS}
            />
          </PopoverContent>
        </Popover>
        <input type="hidden" name="date" value={formatDateValue(selectedDate)} />
        {dateError && <p id="project-date-error" role="alert" className="text-sm text-destructive">{t("contact.dateRequired")}</p>}

        <Input
          name="location"
          placeholder={t("contact.location")}
        />

        <Textarea
          name="description"
          placeholder={t("contact.description")}
          required
        />

        <Button type="submit" className="w-full sm:w-auto sm:min-w-36" disabled={status === "sending"}>
          {status === "sending" ? t("contact.sending") : t("contact.send")}
        </Button>
        {status === "sent" && <p role="status" className="text-sm text-emerald-600">{t("contact.sendSuccess")}</p>}
        {status === "error" && <p role="alert" className="text-sm text-destructive">{t("contact.sendError")}</p>}
      </form>
    </div>
  )
}