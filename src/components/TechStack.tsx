import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Badge from "./Badge";
import { getResumeDataByKey } from "@/data/actions";

interface Skills {
    toolsAndTechnologies: {
        programmingLanguages: string[];
        frameworks: string[];
        databases: string[];
        webTechnologies: string[];
        libraries: string[];
        tools: string[];
        methodologies: string[];
        designSoftware: string[];
        platforms: string[];
    }
}

export default async function TechStack() {
    const skills = await getResumeDataByKey("skills") as unknown as Skills;

    const getTitle = (key: string) => {
        // Keep specific acronyms in uppercase
        if (key === "ciCd") return "CI/CD";
        if (key === "aiMlTools") return "AI/ML";

        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())
            .trim();
    }

    return (
        <Accordion type="single" collapsible defaultValue="item-1" className="">

            {Object.keys(skills.toolsAndTechnologies).map((key: string, index: number) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="">
                    <AccordionTrigger className="rounded-none hover:no-underline border-none cursor-pointer py-2">
                        <h4 className="">{getTitle(key)}</h4>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 space-x-2">
                        {skills.toolsAndTechnologies[key as keyof typeof skills.toolsAndTechnologies].map((item: string, index: number) => (
                            <Badge key={index}>{item}</Badge>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
