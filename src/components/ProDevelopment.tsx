
import { getResumeDataByKey } from "@/data/actions";
import { GraduationCap, Medal } from "lucide-react";

interface ProDevelopment {
    course: string;
    provider: string;
    date: string;
}


export default async function ProDevelopment() {
    const proDevelopment = await getResumeDataByKey("professionalDevelopment") as unknown as ProDevelopment[];


    return (
        <div className="border-t-[0.5px] ">

            {proDevelopment.map((item: ProDevelopment, index: number) => (
                <div className="pl-8 pr-8 py-4 rounded-none hover:no-underline cursor-pointer border-b-[0.5px]  last:border-none" key={index}>
                        <div className="grid grid-cols-6 gap-2 w-full md:grid-cols-12">

                            <div className="col-span-1">
                                <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  ">
                                    <Medal className="size-4" />
                                </div>
                            </div>

                            <div className="col-span-5 md:col-span-7">
                                <h4 className="font-bold">{item.course}</h4>
                                <p className="text-xs text-muted font-light">{item.provider}</p>
                            </div>

                            <div className="col-start-2 col-span-5 md:col-span-4 md:text-right">
                                <p className="text-xs text-muted pt-1 font-light">{item.date}</p>
                            </div>

                        </div>
                    </div>
            ))}
        </div>
    )
}
