import React from 'react';
import { FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa';
import '../styles/Home.css';
import '../styles/AboutMe.css';

function AboutMe({theme}) {
  return (
    <div className='aboutme-app'>
        <div className="content-about">
            <div className='text-paragraph' style={{ color: theme.color }}>
                <p>
                    As a software engineer, I've developed this app as an open-source project. If you're interested in contributing, you can find the project on <a href="https://github.com/tommasogiannoni" target="_blank" rel="noopener noreferrer">GitHub</a>.
                    <br /><br />
                    In this app, I've utilized the beautiful icons from <a href="https://heroicons.com/" target="_blank" rel="noopener noreferrer">Heroicons</a> and have worked extensively on both the architectural structure and the design. I'm open to design suggestions or ideas to enhance it further.
                </p>
            </div>
            <div className="author-links">
                <ul className="social-links">
                    <li className="icon-about">
                        <a href="https://www.linkedin.com/in/tommasogiannoni/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                    </li>
                    <li className="icon-about">
                        <a href="https://github.com/tommasogiannoni" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        </a>
                    </li>
                    <li className="icon-about">
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