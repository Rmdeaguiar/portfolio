import './styles.css';
import Cubos from '../../assets/cubos.png'
import Analysis from '../../assets/analysis.png'

function Experiences() {

  return (
    <div className="container-experiences">
      <h1>Experiências</h1>
      <div className='all-experiences'>
        <div className='experience'>
          <div className='local-experience'>
            <img src={Cubos} alt='Cubos' />
            <h2>Residência Software Cubos Academy</h2>
          </div>
          <h2>Desenvolvedor Full Stack</h2>
          <h3>Janeiro/2023 - Abril/2023</h3>
          <p>Desenvolvimento web de aplicações utilizando React Js, JavaScript, Node
            Js, PostgreSQL, Cypress.io e Git, seguindo a Metodologia Scrum</p>
        </div>
        <div className='experience'>
          <div className='local-experience'>
            <img src={Analysis} alt='analysisbi' />
            <h2>Analysis BI</h2>
          </div>
          <h2>Analista de Sistema</h2>
          <h3>Maio/2023 - Atual</h3>
          <p>Desenvolvimento de aplicação utilizando .NET, C#, JavaScript, SQL, Git</p>
        </div>
      </div>

    </div>
  );
}

export default Experiences;
