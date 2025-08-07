"use client";

import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";

export default function HeroBg() {

    return (
        <div className="fixed top-0 left-0 w-full h-2/4 bg-red-500 z-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-white/10 after:to-white">
            <LetterGlitch
                glitchSpeed={50}
                centerVignette={true}
                outerVignette={false}
                smooth={true}
                glitchColors={["#F0F0F0", "#E0E0E0", "#E5E4E2"]}
            />
        </div>
    )
}

