import React from 'react';
import Profile from '../../assets/profile.png'
import './styles.css';
import Html from '../../assets/html.svg'
import Css from '../../assets/css.svg'
import TypeScript from '../../assets/typescript.svg'
import ReactJs from '../../assets/reactjs.svg'
import NodeJs from '../../assets/node.svg'
import Git from '../../assets/git.svg'
import JavaScript from '../../assets/javascript.svg'
import Postgre from '../../assets/postgresql.svg'

function About() {

  const technologies = [{ image: Html, name: 'HTML5' }, { image: Css, name: 'CSS3' }, { image: JavaScript, name: 'JavaScript' }, { image: TypeScript, name: 'TypeScript' }, { image: ReactJs, name: 'ReactJS' }, { image: NodeJs, name: 'NodeJS' }, { image: Postgre, name: 'PostgreSQL' }, { image: Git, name: 'GIT' }]


  return (
    <div className="container-about">
      <div className='left-about'>
        <img src={Profile} alt='profile-photo' />
      </div>
      <div className='right-about'>
        <div className='content'>
          <h1>Olá! Meu nome é Rafael Aguiar!</h1>
          <h2>Sou Desenvolvedor Full Stack | Front-End | Back-End</h2>
          <p>De Salvador/BA, apaixonado por esportes e por aprender algo novo a cada dia!</p>
          <p>Atualmente estou em transição de carreira para área de tecnologia, uma área que aprendi a amar. Poder estar em constante aprendizado, enfrentando desafios e solucionando problemas é o que me move.</p>
        </div>
        <h2>Estas são as tecnologias que utilizo:</h2>
        <div className='technologies'>
          {technologies.map((technology) => (
            <div key={technology.name} className='technology'>
              <img src={technology.image} alt={technology.name} />
              <h3>{technology.name}</h3>
            </div>
          ))}

        </div>
      </div>


    </div>
  );
}

export default About;
