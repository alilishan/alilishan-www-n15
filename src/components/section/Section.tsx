import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

const Section = ({
    heading,
    headingClassName,
    className,
    children
}: {
    heading?: string | React.ReactNode,
    headingClassName?: string,
    className?: string,
    children: React.ReactNode
}) => {
    return <section className={cn("space-y-4", className)}>
        {heading && <SectionHeading className={headingClassName}>{heading}</SectionHeading>}
        {children}
    </section>;
};

export default Section;
