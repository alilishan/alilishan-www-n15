import { getResumeDataByKey } from "@/data/actions";
import { UserStar } from "lucide-react";


interface ProPosts {
    position: string;
    organization: string;
    period: string;
}

const ProPosts = async () => {
    const proPosts = await getResumeDataByKey("professionalPosts") as ProPosts[];

    return (
        <div className="space-y-2">
            {proPosts.map((proPost: ProPosts) => (
                <div key={proPost.position} className="flex items-start gap-2 py-2">
                    <div className="flex size-6 shrink-0 items-center justify-center text-muted-foreground">
                        <UserStar className="size-4" />
                    </div>
                    <div key={proPost.position} className="space-y-1 flex-1">
                        <h1 className="font-bold text-sm">{proPost.position}</h1>
                        <p className="text-muted text-xs">{proPost.organization}</p>
                        <p className="text-muted text-xs">{proPost.period}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProPosts;
