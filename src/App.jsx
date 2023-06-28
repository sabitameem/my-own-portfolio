
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     <Header></Header>
     <About></About> 
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  );
};

export default App;