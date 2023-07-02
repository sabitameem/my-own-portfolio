import { ToastContainer } from 'react-toastify';
import './App.css'
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <div className=' overflow-hidden text-black'>
     <Header></Header>
     <Banner></Banner>
     <Nav></Nav>
     <About></About> 
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
     <ToastContainer />
    
     {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;