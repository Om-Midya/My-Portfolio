import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {ComputersCanvas} from "./canvas";
import {TypewriterEffectSmooth, TypewriterEffect} from "./ui/typewriter-effect.jsx";


const Hero = () => {
    const words = [
        {
            text: "HI,",
            className: `${styles.heroHeadText} text-white mt-[10px]`
        },
        {
            text: "I",
            className: `${styles.heroHeadText} text-white mt-5`
        },
        {
            text: "am",
            className: `${styles.heroHeadText} text-white mt-5`
        },
        {
            text: "Archisman",
            className: `${styles.heroHeadText} text-[#e91e63] dark:text-pink-500 mt-5`,
        },
    ];

    const[isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1280px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
  return (
    <section className={"relative w-full h-screen mx-auto"}>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
            <div className={"flex flex-col justify-center items-center mt-5"}>
                <div className={"w-5 h-5 rounded-full bg-[#e91e63]"}/>
                <div className={"w-1 sm:h-80 h-40 bg-gradient-to-r from-pink-500 to-transparent"}/>
            </div>
            <div>
                {isMobile ? <h1 className={`${styles.heroHeadText} text-white mt-5`}>HI, I'm <span
                    className={"text-[#e91e63]"}>Archisman</span></h1> : <TypewriterEffectSmooth words={words}/>}

                {/*<h1 className={`${styles.heroHeadText} text-white mt-5`}>HI, I'm <span className={"text-[#e91e63]"}>Archisman</span></h1>*/}

                <p className={`${styles.heroSubText} text-white-100 mt-2`}> I am an Android, Web developer with <br className={"sm:block hidden"}/> Expertise Backend Development and <br className={"sm:block hidden"}/>also
                    an AR/VR enthusiast</p>
            </div>
        </div>
        <ComputersCanvas />

        <div className={"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"}>
            <a href="#about">
                <div className={"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"}>
                    <motion.div
                        animate={{y: [0, 24, 0]}}
                        transition={{duration: 2, repeat: Infinity, repeatType: 'loop'}}
                        className={"w-3 h-3 rounded-full bg-secondary mb-1"}
                    />
                </div>
            </a>
        </div>
    </section>
  )
}

export default Hero
