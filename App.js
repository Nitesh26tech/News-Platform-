import React, {  } from "react";
import Navbar from "./Components/Navbar";
import NewsList from "./Components/NewsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Components/About";


const App =()=> {
 
    return (
      <div className="App">
        <Router>
          <Navbar />
            <Routes>
            <Route path="/general" element={<NewsList category="general" />} />
            <Route path="/health" element={<NewsList category="health" />} />
            <Route path="/science" element={<NewsList category="science" />} />
            <Route path="/sports" element={<NewsList category="sports" />} />
            <Route path="/technology" element={<NewsList category="technology" />}/>
            <Route path="/business" element={<NewsList category="business" />}/>
            <Route path="/signIn" element={<NewsList category="signIn" />} />
            <Route path="/about" element={<About/>} />
            </Routes>
          
        </Router>
      </div>
    );
  };
 export default App; 
