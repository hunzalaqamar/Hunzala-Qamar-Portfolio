// components/ExperienceCard.tsx
import { Experience } from "@/components/interface/interface";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  image,
}: Experience) {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-40 h-40 p-5 flex justify-center items-center">
        <img
          src={image}
          alt={role}
          className="object-contain transition-transform hover:scale-105 w-full h-full"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-1">{role}</h3>
        <p className="text-sm font-medium text-muted-foreground mb-1">
          {company}
        </p>
        <p className="text-xs text-muted-foreground mb-3">{period}</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
