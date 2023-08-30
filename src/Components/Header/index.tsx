import React from 'react';
import Linkedin from '../../assets/linkedin.svg'
import GitHub from '../../assets/github.svg'
import Email from '../../assets/email.svg'
import Brazil from '../../assets/brazil.svg'
import UnitedStates from '../../assets/usa.svg'
import { useLanguage } from '../../stores/languageStore';
import './styles.css';

function Header() {

  const { english, setEnglish } = useLanguage();
  
  return (
    <div className="container-header">
      <div className='titles'>
        <a href='#about'> {english ? 'about me' : 'sobre mim'}</a>
        <a href='#projects'>{english ? 'projects' : 'projetos'}</a>
        <a href='#experiences'>{english ? 'experience' : 'experiência'}</a>
      </div>
      <div className='social'>
        <a href='https://www.linkedin.com/in/rafael-maguiar/' target="_blank" rel='noreferrer'><img src={Linkedin} alt='linkedin' /></a>
        <a href='https://www.github.com/rmdeaguiar/' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' /></a>
        <a href='mailto:rafael.aguiar91@gmail.com'><img src={Email} alt='email' /></a>
      </div>
      <div className='languages'>
        <img src={Brazil} alt='portuguese' onClick={() => setEnglish(false)} />
        <img src={UnitedStates} alt='english' onClick={() => setEnglish(true)} />
      </div>
    </div >
  );
}

export default Header;
