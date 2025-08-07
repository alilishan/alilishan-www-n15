
import Badge from "./Badge";
import { getResumeDataByKey } from "@/data/actions";

interface Skills {
    industryKnowledge: string[];
}

export default async function IndustryKnowledge() {
    const skills = await getResumeDataByKey("skills") as unknown as Skills;

    return (
        <div className="space-y-2 space-x-2">
            {skills.industryKnowledge.map((item: string, index: number) => (
                <Badge key={index}>{item}</Badge>
            ))}
        </div>
    )
}
