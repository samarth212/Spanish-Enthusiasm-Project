import './App.css'
import Hero from './Hero'
import Legacy from './Legacy';
import Clay from './Clay'
import Rise from './Rise';
import Borders from './Borders';
import Conclusion from './Conclusion';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from './About';


function App() {

  return(

    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero></Hero>
            <Legacy></Legacy>
            <Clay></Clay>
            <Rise></Rise>
            <Borders></Borders>
            <Conclusion></Conclusion>
          </>
          
        }/>

        <Route path="/about" element={<About></About>}/>

      </Routes>

    </Router>

  )
  
  
};
  

export default App;
