import './styles.css';
import Header from '../Components/Header'
import About from '../Components/About';
import Projects from '../Components/Projects';
import Experiences from '../Components/Experiences';
import { useLanguage } from '../stores/languageStore';

function Home() {
  const { english, setEnglish } = useLanguage();

  return (
    <div className="container-home">
      <Header
        english={english}
        setEnglish={setEnglish}
      />
      <div id='about'>
        <About
          english={english}
        />
      </div>
      <div id='projects'>
        <Projects 
         english={english}
         />
      </div>
      <div id='experiences'>
        <Experiences
        english={english}
         />
      </div>
      <Header
        english={english}
        setEnglish={setEnglish} />
    </div>
  );
}

export default Home;
