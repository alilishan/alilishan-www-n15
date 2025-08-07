import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/section/Section";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProDevelopment from "@/components/ProDevelopment";
import TechStack from "@/components/TechStack";
import IndustryKnowledge from "@/components/IndustryKnowledge";
import Referees from "@/components/Referees";
import ProPosts from "@/components/ProPosts";
import SkillsDevelopment from "@/components/SkillsDevelopment";
import DescriptionRotator from "@/components/DescriptionRotator";


export default function Home() {
    return (
        <Container>

            <div className="md:rounded-lg border-[0.5px]  overflow-hidden">
                <div className="mx-auto w-full max-w-2xl bg-white print:space-y-4">

                    <Section className="flex items-start md:items-center justify-between p-8 pb-0">
                        <div className="flex-1 space-y-1.5 pr-4">
                            <h1 className="text-2xl font-bold">Ali Lishan</h1>
                            <p className="text-dark">MSc IT Management, BSc (Hons) Software Engineering.</p>

                           <DescriptionRotator texts={professionalDescriptors} />

                            {/* <p className="max-w-md">
                                <a href="https://www.google.com/maps/search/Petaling%20Jaya%2C%20Malaysia">Petaling Jaya, Malaysia</a>
                            </p> */}
                        </div>
                        <div className="relative flex shrink-0 overflow-hidden rounded-full size-20 md:size-32 border-[0.5px] p-1">
                            <Image
                                alt="Ali Lishan"
                                src="/my-avatar.jpg"
                                width={128}
                                height={128}
                                className="aspect-square h-full w-full rounded-full"
                            />
                        </div>
                    </Section>

                    <Section heading="About Me" className="px-8 mb-8">
                        <p>Chief Software Architect with over 20 years in the software development industry, specializing in web and mobile application development. Strong background in software project management, web application development, and IT infrastructure management. Proven track record of leading and managing software development teams, driving innovative solutions, and contributing to the strategic vision of technology companies.</p>
                    </Section>

                    <Section heading="Industry Knowledge" className="px-8 mb-8">
                        <div className="">
                            <IndustryKnowledge />
                        </div>
                    </Section>

                    <Section heading="Experience" headingClassName="px-8 lining-tilt-background border-t-[0.5px]">
                        <Experience />
                    </Section>

                    <Section heading="Education" headingClassName="px-8 lining-tilt-background">
                        <Education />
                    </Section>

                    <Section heading="Professional Development" headingClassName="px-8 lining-tilt-background">
                        <ProDevelopment />
                    </Section>

                </div>

            </div>

            <aside className="w-full md:w-2/6 p-8">
                <div className="sticky top-8 space-y-8">
                    <Section heading="">
                        <p>62, Jalan PJU 7/30,
                        <br/>Mutiara Damansara,
                        <br/>Petaling Jaya, 47800
                        <br/>Selangor. Malaysia.
                        <br/><span className="font-bold">(601) 266-88597</span>
                        <br/><span className="font-bold">alilishan@gmail.com</span>
                        </p>

                    </Section>
{/*
                    <Section heading="Profile">
                        <></>
                    </Section> */}



                    <Section heading="Tools & Technologies">
                        <div className="flex flex-wrap gap-2">
                            <TechStack />
                        </div>
                    </Section>

                    <Section heading="Skills Development">
                        <SkillsDevelopment />
                    </Section>

                    <Section heading="Professional Posts">
                        <ProPosts />
                    </Section>

                    <Section heading="Referees & References">
                        <Referees />
                    </Section>

                </div>
            </aside>

        </Container>
    );
}


const professionalDescriptors: string[] = [
    "Chief Software Architect",
    "Senior Full-Stack Developer",
    "Technology Leadership Expert",
    "Cloud-Native Application Developer",
    "Veteran Software Engineer",
    "AI-Integrated Full-Stack Developer",
    "Engineering Team Leader",
    "Enterprise Software Architect",
    "International Technology Consultant",
    "Modern JavaScript Specialist"
]
