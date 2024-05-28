import React from 'react'

import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {technologies} from "../constants/constants.js";
import {Tilt} from "react-tilt";

import {SectionWrapper} from '../hoc'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.2,1)}
                className={"mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]"}>
        Following are the Tech stacks I have experience working with. I may not be an expert in these but, I can learn and I have also built some projects showcasing my familiarity with these technologies
      </motion.p>

        <div className={"mt-20 flex flex-wrap gap-5 max-w-3xl"}>
            {technologies.map((tech,index)=>(
                <TechCard key={tech.name} index={index} {...tech}/>
            ))}
        </div>
    </>
  )
}


const TechCard = ({index,name,icon}) =>(
    <Tilt>
        <motion.div
            variants={fadeIn("top","spring",index*0.5,0.75)}
            className='w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-[1px] rounded-full shadow-card'
        >
            <div
                options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
                 className={"h-16 w-16 bg-tertiary rounded-full items-center flex flex-col justify-evenly "}
            >
                <img
                    src={icon}
                    className={"w-12 h-12 object-contain"}
                />

            </div>
        </motion.div>
    </Tilt>
);

export default SectionWrapper(Tech,"tech")
