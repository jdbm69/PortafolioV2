import { Routes, Route } from 'react-router-dom';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Container = () => {
  
    return (
        <div className="container-box" id='container-box'>
            <Routes>
                <Route 
                    path='/'
                    element={<About />}
                />
                <Route 
                    path='/skills'
                    element={<Skills />}
                />
                <Route 
                    path='/projects'
                    element={<Projects />}
                />
                <Route 
                    path='/contact'
                    element={<Contact />}
                />
            </Routes> 
        </div>
    );
}
  
export default Container;