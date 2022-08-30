import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import "./Projects.scss";

import ReactTooltip from 'react-tooltip';
import { AppWrap,MotionWrap } from '../../wrapper';
import { urlFor, client} from '../../client';

const Projects = () => {
  const [projects, setProjcts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query)
      .then((data) => {
        setProjcts(data);
      });
  }, []);

  return (
    <>
      <h2 className="head-text">My Developement <span>Projects</span></h2>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projects.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.1, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.0 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.0 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 data-tip data-for={work.title} className="bold-text">{work.title}</h4>
              {/* <p className="p-text" >{work.description}</p> */}

              <ReactTooltip
                id={work.title}
                effect="solid"
                arrowColor="#fff"
                place='bottom'
                className="projects-tooltip"
              >
                <p className="p-text" >{work.description}</p>
              </ReactTooltip>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

// export default Projects;
export default AppWrap(MotionWrap(Projects, 'app__works'), 'projects', 'app__whitebg');