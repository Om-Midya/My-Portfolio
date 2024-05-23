import React from 'react'

import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {services} from "../constants/constants.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../hoc";



const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);


const About = () => {
  return (
      <>
          <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)}
                    className={"mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]"}>
              I am a student of Computer Science and Engineering at Scaler School of Technology. I am a passionate
              developer who loves to code and build things. I have been coding for the past 2 years and have developed a
              lot of projects. I have a good understanding of Data Structures and Algorithms. I am also familiar with
              various technologies like MERN, Kotlin, Android, React-Native and so on.I am also an AR/VR enthusiast. I
              am always eager to learn new things and improve my skills. I am looking for opportunities where I can
              apply my skills and knowledge to solve real-world problems.
          </motion.p>

          <div className='mt-20 flex flex-wrap gap-10'>
              {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
              ))}
          </div>
      </>
  )
}

export default SectionWrapper(About, "about");
