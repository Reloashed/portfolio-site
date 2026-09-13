import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const organisation = form.get("organisation")?.toString() ?? "";
    const projectType = form.get("projectType")?.toString() ?? "";
    const date = form.get("date")?.toString() ?? "";
    const location = form.get("location")?.toString() ?? "";
    const description = form.get("description")?.toString() ?? "";

    const subject = `New project inquiry — ${name}`;

    const body = `
      Name: ${name}
      E-mail: ${email}
      Team / Organisation: ${organisation}
      ${t("contact.projectType")}: ${projectType}
      ${t("contact.date")}: ${date}
      ${t("contact.location")}: ${location}

      ${t("contact.description")}:
      ${description}
      `.trim();

    const mailto = `mailto:contact@resh.video?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const items = t("contact.items", { returnObjects: true }) as { label: string, value: string }[]

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-4xl font-bold mb-6">{t("header.contact")}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <Input
          name="date"
          type="date"
        />

        <Input
          name="location"
          placeholder={t("contact.location")}
        />

        <Textarea
          name="description"
          placeholder={t("contact.description")}
          required
        />

        <Button type="submit" className="w-[50%] ml-[25%]">
          Send
        </Button>
      </form>
    </div>
  )
}