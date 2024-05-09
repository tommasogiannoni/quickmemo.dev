import React from 'react';
import { FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa';
import '../styles/Home.css';
import '../styles/AboutMe.css';

function AboutMe({theme}) {
  return (
    <div className='aboutme-app'>
        <div className="content-about">
            <div className='text-paragraph' style={{ color: theme.color }}>
            <div className='about-section'>
                <p>👋 Hi there! my name is <b style={{ fontWeight: '700' }}>Tommaso</b>. I'm a front-end software engineer. This web application is an <b style={{ fontWeight: '600'}}>open-source</b> project that i've showcased in my <a href="https://github.com/tommasogiannoni" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                <p>💡 I got ideas from different online apps to make a simple version where you can quickly write down notes and ideas straight from your browser. It works on <b style={{ fontWeight: '500' }}>mobile </b> too.</p>
                <p>🎨 I've put significant effort into both the architectural structure and design of the app. I'm always <b style={{ fontWeight: '650', fontStyle: 'italic' }}>open to feedback or ideas</b> to further enhance it!</p>
                <p>🐞 If you're a developer and you encounter any bugs or have any ideas to make it even better, feel free to reach out to me via <a href="mailto:tommaso.giannoni@yahoo.it" style={{ fontWeight: '650' }} target="_blank" rel="noopener noreferrer">email</a> or open a pull-request. I'm always open to new contributors!</p>
            </div>
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