import { cn } from "@/libs/utils";


const Badge = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <span className={cn("inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-muted text-muted-foreground", className)}>{children}</span>;
};

export default Badge;
