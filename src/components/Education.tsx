import Markdown from "markdown-to-jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { getResumeDataByKey } from "@/data/actions";
import { GraduationCap } from "lucide-react";
import { MarkdownOverrides } from "./MarkdownOverrides";

interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description: string[];
}


export default async function Education() {
    const education = await getResumeDataByKey("education") as unknown as Education[];


    return (
        <Accordion type="single" collapsible className="border-t-[0.5px] border-b-[0.5px] ">

            {education.map((item: Education, index: number) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-[0.5px] ">
                    <AccordionTrigger className="pl-8 pr-8 rounded-none hover:no-underline  cursor-pointer">
                        <div className="grid grid-cols-12 gap-2 w-full">

                            <div className="col-span-1">
                                <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  ">
                                    <GraduationCap className="size-4" />
                                </div>
                            </div>

                            <div className="col-span-7">
                                <h4 className="font-bold">{item.degree}</h4>
                                <p className="text-muted">{item.institution} &bull; Full-time</p>
                                <p className="text-xs text-muted font-light mt-2">{item.location}</p>
                            </div>

                            <div className="col-span-4 text-right">
                                <p className="text-xs text-muted pt-1 font-light">{item.period}</p>
                            </div>

                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-8">
                        <Markdown
                            options={{
                                overrides: MarkdownOverrides,
                            }}
                        >
                            {item.description}
                        </Markdown>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
