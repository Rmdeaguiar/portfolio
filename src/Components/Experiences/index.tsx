import './styles.css';
import Cubos from '../../assets/cubos.png'
import Analysis from '../../assets/analysis.png'
import { Props } from '../../types/props';

function Experiences({english}: Props) {

  return (
    <div className="container-experiences">
      <h1>{english ? 'Experiences' : 'Experiências'}</h1>
      <div className='all-experiences'>
        <div className='experience'>
          <div className='local-experience'>
            <img src={Cubos} alt='Cubos' />
            <h2>{english ? 'Cubos Academy' : 'Residência Software Cubos Academy'}</h2>
          </div>
          <h2>{english ? 'Full Stack Software Developer' : 'Desenvolvedor Full Stack'}</h2>
          <h3>{english ? 'January/2023 - April/2023' : 'Janeiro/2023 - Abril/2023'}</h3>
          <p>{english ? 'Web Developing applications using React Js, JavaScript, Node Js, PostgreSQL, Styled-Components, Git, API Rest, Cypress.io' : 'Desenvolvimento web de aplicações utilizando React Js, JavaScript, Node Js, PostgreSQL, Cypress.io e Git, seguindo a Metodologia Scrum'}</p>
        </div>
        <div className='experience'>
          <div className='local-experience'>
            <img src={Analysis} alt='analysisbi' />
            <h2>Analysis BI</h2>
          </div>
          <h2>{english ? 'System Analyst' : 'Analista de Sistema'}</h2>
          <h3>{english ? 'May/2023 - Now' : 'Maio/2023 - Atual'}</h3>
          <p>{english ? 'Developing applications using C#, .NET, SQL Server, JavaScript, Git' : 'Desenvolvimento de aplicação utilizando .NET, C#, JavaScript, SQL, Git'}</p>
        </div>
      </div>

    </div>
  );
}

export default Experiences;
