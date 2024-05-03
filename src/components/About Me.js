import React from 'react';
import { FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa';
import '../styles/Home.css';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className='aboutme-app'>
        <div className="content">
            <div className="author-links">
                <ul className="social-links">
                    <li className="icon">
                        <a href="https://www.linkedin.com/in/tommasogiannoni/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                    </li>
                    <li className="icon">
                        <a href="https://github.com/tommasogiannoni" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        </a>
                    </li>
                    <li className="icon">
                        <a href="https://medium.com/@tommaso.giannoni" target="_blank" rel="noopener noreferrer">
                        <FaMedium />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default AboutMe;