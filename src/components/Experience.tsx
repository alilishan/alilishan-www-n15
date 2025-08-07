import Markdown from "markdown-to-jsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Badge from "./Badge";
import { getResumeDataByKey } from "@/data/actions";
import { BriefcaseBusiness } from "lucide-react";
import { MarkdownOverrides } from "./MarkdownOverrides";

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
}


export default async function Experience() {
    const experience = await getResumeDataByKey("experience") as Experience[];

    return (
        <Accordion type="single" collapsible className="border-t-[0.5px] border-b-[0.5px] ">

            {experience.map((item: Experience, index: number) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-[0.5px] ">
                    <AccordionTrigger className="pl-8 pr-8 rounded-none hover:no-underline  cursor-pointer">
                        <div className="grid grid-cols-6 gap-2 w-full md:grid-cols-12">

                            <div className="col-span-1">
                                <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  ">
                                    <BriefcaseBusiness className="size-4" />
                                </div>
                            </div>

                            <div className="col-span-5 md:col-span-7">
                                <h4 className="font-bold">{item.title} <Badge className="text-xs">{item.location}</Badge></h4>
                                <p className="text-xs text-muted font-light">{item.company} &bull; Full-time</p>
                            </div>

                            <div className="col-start-2 col-span-5 md:col-span-4 md:text-right">
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
