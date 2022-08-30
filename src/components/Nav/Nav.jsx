import React, { useState } from 'react';
import './Nav.scss';

import { motion } from "framer-motion";

import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { IoIosApps } from 'react-icons/io';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { HiMenu } from "react-icons/hi";

import ReactTooltip from 'react-tooltip';

const Nav = () => {
  const [active, setActive] = useState("#home")

  return (
    <motion.nav 
      whileInView={{opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <a className={active === "#home" && "active"} onClick={() => setActive("#home")} href='#home' data-tip data-for="#home">
        <AiOutlineHome />
        <ReactTooltip
          id="#home"
          effect="solid"
          arrowColor="#fff"
          className="nav-tooltip"
        >
          Home
        </ReactTooltip>
      </a>

      <a className={active === "#skills" && "active"} onClick={() => setActive("#skills")} href='#skills'data-tip data-for="#skills">
        <IoIosApps />
        <ReactTooltip
          id="#skills"
          effect="solid"
          arrowColor="#fff"
          className="nav-tooltip"
        >
          Skills
        </ReactTooltip>
      </a>

      <a className={active === "#experience" && "active"} onClick={() => setActive("#experience")} href='#experience'data-tip data-for="#experience">
        <HiMenu />
        <ReactTooltip
          id="#experience"
          effect="solid"
          arrowColor="#fff"
          className="nav-tooltip"
        >
          Experience
        </ReactTooltip>
      </a>

      <a className={active === "#project" && "active"} onClick={() => setActive("#project")} href='#projects'data-tip data-for="#projects">
        <AiOutlineProject />
        <ReactTooltip
          id="#projects"
          effect="solid"
          arrowColor="#fff"
          className="nav-tooltip"
        >
          Projects
        </ReactTooltip>
      </a>

      <a className={active === "#contact" && "active"} onClick={() => setActive("#contact")} href='#contact'data-tip data-for="#contact">
        <BiMessageSquareDetail />
        <ReactTooltip
          id="#contact"
          effect="solid"
          arrowColor="#fff"
          className="nav-tooltip"
        >
          Contact
        </ReactTooltip>
      </a>

    </motion.nav>
  )
}

export default Nav