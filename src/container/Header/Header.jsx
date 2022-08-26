import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import { adidas } from "../../constants/images"

import { AppWrap } from '../../wrapper';
import "./Header.scss";

import { urlFor, client} from '../../client';

const Header = () => {
  const [profile,setProfile] = useState([]);
  const [resume,setResume] = useState();

  const resumee = "";

  useEffect(() => {
    const profilQquery = '*[_type == "profile"]';

    client.fetch(profilQquery).then((data) => {
      setProfile(data);
    });

  }, []);

  return (
    <div className="app__header app__flex">

      <div 
        className="app__greeting"
      >
        <div>
          <motion.h2 
            className="heading-text"
            whileInView={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Hello! I Am
          </motion.h2>
          {profile.map((p) => (
            <motion.h1 
            className="name-text"
            whileInView={{ x: [30, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            >
              {p.name}
            </motion.h1>
          ))}
          <div 
            className="type__text"
          >
            <Typewriter
              className="type__text"
              options={{
                strings: ['Software Engineer.', 'React Developer.', 'Web Developer.', 'Software Developer.'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 30,
              }}
            />
          </div>

          <a href={"https://cdn.sanity.io/files/d1k2qulk/production/c9c4531f575b9425e04ec7e16e5ab112a1b59526.pdf"} download>
            <button type="button" className="download__button">Download Resume</button>
          </a>
        </div>
      </div>

      

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2}}
      >
        {profile.map((p) => (
          <img src={urlFor(p.pic)} alt="profile_bg" />
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header,'home');
