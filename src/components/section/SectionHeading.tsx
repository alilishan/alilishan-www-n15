import { cn } from "@/libs/utils";

const SectionHeading = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <h2 className={cn("text-lg font-bold m-0 py-4", className)}>{children}</h2>;
};

export default SectionHeading;
