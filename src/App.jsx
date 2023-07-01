
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
     <Header></Header>
     <Banner></Banner>
     <Nav></Nav>
     <About></About> 
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
    
     {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;