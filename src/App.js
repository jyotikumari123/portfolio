
import { React, useContext } from 'react';
import './index.css';
import {Route,Routes} from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import {MouseContext} from './context/mouse-context';
import DotRing from './components/DotRing/DotRing';

function App() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
    <div className="App">
      <DotRing />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
         <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
        </div>
      </div>
      <div className="container" style={{ background: "peachpuff" }}></div>
    </div>
  
    </>
  );
}

export default App;
