import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/kfaisal-se/">
        <div>
          <FaLinkedinIn />
        </div>
      </a>

      <a href='https://leetcode.com/kfaisal-se/'>
        <div>
          <SiLeetcode />
        </div>
      </a>

      <a href='https://github.com/kfaisal-se'>
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia;