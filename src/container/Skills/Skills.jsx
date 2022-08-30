import React, { useState, useEffect } from 'react'
import "./Skills.scss";

import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client} from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

  }, []);

  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
              data-tip data-for={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor ? skill.bgColor : '#edf2f8' }} >
                <img  src={urlFor(skill.icon)} alt={skill.name} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {skills.map((skill) => (
          <ReactTooltip
            id={skill.name}
            effect="solid"
            arrowColor="#fff"
            className="skills-iconTooltip"
          >
            {skill.name}
          </ReactTooltip>
        ))}
        
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');