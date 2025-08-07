"use client";

import RotatingText from "./TextAnimations/RotatingText/RotatingText";



const DescriptionRotator = ({ texts }: { texts: string[] }) => {
    return (
         <RotatingText
            texts={texts}
            mainClassName="justify-start text-muted"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitBy="word"
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
        />
    )
}

export default DescriptionRotator;
