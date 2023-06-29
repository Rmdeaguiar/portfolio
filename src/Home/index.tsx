import './styles.css';
import Header from '../Components/Header'
import About from '../Components/About';
import Projects from '../Components/Projects';
import Experiences from '../Components/Experiences';


function Home() {
  return (
    <div className="container-home">
      <Header />
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='experiences'>
        <Experiences/>
      </div>
      <Header />
    </div>
  );
}

export default Home;
