import React from 'react';
import Linkedin from '../../assets/linkedin.svg'
import GitHub from '../../assets/github.svg'
import Email from '../../assets/email.svg'
import './styles.css';

function Header() {

  return (
    <div className="container-header">
      <div className='titles'>

        <a href='#about'>sobre mim</a>
        <a href='#projects'>projetos</a>
        <a href='#experiences'>experiência</a>
      </div>
      <div className='social'>
        <a href='https://www.linkedin.com/in/rafael-maguiar/' target="_blank" rel='noreferrer'><img src={Linkedin} alt='linkedin' /></a>
        <a href='https://www.github.com/rmdeaguiar/' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' /></a>
        <a href='mailto:rafael.aguiar91@gmail.com'><img src={Email} alt='email' /></a>
      </div>
    </div >
  );
}

export default Header;
