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
import { Props } from '../../types/props';

function About({english}: Props) {


  const technologies = [{ image: Html, name: 'HTML5' }, { image: Css, name: 'CSS3' }, { image: JavaScript, name: 'JavaScript' }, { image: TypeScript, name: 'TypeScript' }, { image: ReactJs, name: 'ReactJS' }, { image: NodeJs, name: 'NodeJS' }, { image: Postgre, name: 'PostgreSQL' }, { image: Git, name: 'GIT' }]

  return (
    <div className="container-about">
      <div className='left-about'>
        <img src={Profile} alt='rafael'/>
      </div>
      <div className='right-about'>
        <div className='content'>
          <h1>{english ? 'Hello! My name is Rafael Aguiar' : 'Olá! Meu nome é Rafael Aguiar!'}</h1>
          <h2>{english ?'Software Developer' : 'Desenvolvedor Full Stack | Front-End | Back-End'}</h2>
          <p>{english ? `Brazilian, passionate about sports and solving problems. I believe that technology is the main bridge to transform, improve and solve problems in people's lives and in society.` : 'Baiano, apaixonado por esportes e por resolver problemas. Acredito que a tecnologia é a principal ponte para transformar, melhorar e resolver problemas da vida das pessoas e da sociedade.'}</p>
          <p>{english ? 'Certified by the FullStack Software Development course at Cubos Academy, where the following technologies were learned: HTML, CSS, React Js, JavaScript, Node Js, PostgreSQL. And also, the Agile Scrum methodology being applied in the challenges.' : 'Certificado pelo curso de Desenvolvimento de Software FullStack da Cubos Academy, onde foram abordadas as seguintes tecnologias: HTML, CSS, React Js, JavaScript, Node Js, PostgreSQL. E também, a metodologia ágil Scrum sendo aplicada nos desafios.'}</p>
        </div>
        <h2>{english ? 'These are the technologies that I use' : 'Estas são as tecnologias que utilizo:'}</h2>
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
