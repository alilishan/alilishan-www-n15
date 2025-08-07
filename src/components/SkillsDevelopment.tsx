import { getResumeDataByKey } from "@/data/actions";
import { Star } from "lucide-react";


interface SkillsDevelopment {
    course: string;
    provider: string;
    year: string;
}

const SkillsDevelopment = async () => {
    const skillsDevelopment = await getResumeDataByKey("skillsDevelopment") as SkillsDevelopment[];

    return (
        <div className="space-y-2">
            {skillsDevelopment.map((skillDevelopment: SkillsDevelopment) => (
                <div key={skillDevelopment.course} className="flex items-start gap-2 py-2">
                    <div className="flex size-6 shrink-0 items-center justify-center text-muted-foreground">
                        <Star className="size-4" />
                    </div>
                    <div key={skillDevelopment.course} className="space-y-1 flex-1">
                        <h1 className="font-bold text-sm">{skillDevelopment.course}</h1>
                        <p className="text-muted text-xs">
                            {skillDevelopment.provider && <span>{skillDevelopment.provider} &bull; </span>}
                            {skillDevelopment.year}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillsDevelopment;
