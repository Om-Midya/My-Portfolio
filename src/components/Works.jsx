import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { projects, tabs } from '../constants/constants.js';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion.js";
import { Tilt } from "react-tilt";
import { github } from "../assets/index.js";

const Tab = ({ name, onClick, isActive }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={onClick}
            className={`cursor-pointer ${isActive ? 'text-white' : 'text-secondary'} text-[14px] font-semibold`}
        >
            {name}
        </motion.div>
    );
};

const ProjectCard = ({
                         index,
                         name,
                         description,
                         tags,
                         image,
                         source_code_link
                     }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: index * 0.3, duration: 0.75 }}
        >
            <Tilt
                options={{
                    max: 20,
                    scale: 1,
                    speed: 100,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        setFilteredProjects(projects.filter(activeTab.filter));
    }, [activeTab]);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My works</p>
                <h2 className={styles.sectionHeadText}>My Projects</h2>
            </motion.div>
            <div className={"w-full flex"}>
                <motion.p variants={fadeIn("", "", 0.1, 1)}
                          className={"mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]"}>
                    Following are some of the projects that I have worked on. I have developed these projects using
                    various
                    technologies like MERN, Kotlin, Android, React-Native and so on. I have also worked on some
                    Data-Science
                    Projects. I have developed these projects to improve my skills and knowledge. Each project is
                    briefly
                    described along with the links to the code repositories, some also have the live demo links. It
                    reflects
                    my ability to work with different technologies and my passion for coding.
                </motion.p>
            </div>
            <div className='mt-10 flex space-x-4'>
                {tabs.map((tab) => (
                    <Tab
                        key={tab.name}
                        name={tab.name}
                        onClick={() => setActiveTab(tab)}
                        isActive={tab === activeTab}
                    />
                ))}
            </div>
            <div className='mt-20 flex flex-wrap gap-5'>
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.name} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, '');
