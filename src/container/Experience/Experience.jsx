import React, { useState, useEffect } from 'react'
import "./Experience.scss";

import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client} from '../../client';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]';

    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Experience</h2>

      <div className="app__experience-container">
        <div className="app__exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p1>{work.company}</p1>
                      <p className='p-text'>{work.desc1}</p>
                      <p className='p-text'>{work.desc2}</p>
                      <p className='p-text'>{work.desc3}</p>
                      <p className='p-text'>{work.desc4}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

// export default Skills;
export default AppWrap(MotionWrap(Experience, 'app__skills'), 'experience', 'app__primarybg');