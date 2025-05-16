import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const  checkMode = () => {
    if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = 'rgb(0 7 14)';
    } else {
        setMode('light')
        document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Title" about="About" mode ={mode} checkMode={checkMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode = {mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;