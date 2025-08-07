import { getResumeDataByKey } from "@/data/actions";
import { User } from "lucide-react";


interface Referees {
    name: string;
    title: string;
    location: string;
}

const Referees = async () => {
    const referees = await getResumeDataByKey("references") as Referees[];

    return (
        <div className="space-y-2">
            {referees.map((referee: Referees) => (
                <div key={referee.name} className="flex items-start gap-2 py-2">
                    <div className="flex size-6 shrink-0 items-center justify-center text-muted-foreground">
                        <User className="size-4" />
                    </div>
                    <div key={referee.name} className="space-y-1 flex-1">
                        <h1 className="font-bold text-sm">{referee.name}</h1>
                        <p className="text-muted text-xs">{referee.title}</p>
                        <p className="text-muted text-xs">{referee.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Referees;
