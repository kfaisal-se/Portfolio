import React, { useState } from 'react';
import './Nav.scss';

import { motion } from "framer-motion";

import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { IoIosApps } from 'react-icons/io';
import { BiMessageSquareDetail } from 'react-icons/bi';

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

      <a className={active === "#about" && "active"} onClick={() => setActive("#about")} href='#about'data-tip data-for="#about">
        <AiOutlineUser />
        <ReactTooltip
          id="#about"
          effect="solid"
          arrowColor="#fff"
          className="nav-tooltip"
        >
          About
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