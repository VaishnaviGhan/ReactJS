import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const[mode,SetMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor = '#203b7a';
    }
    else{
      SetMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
<>
<Navbar title="Govinda Darshan" aboutText="Shift" mode={mode} toggleMode={toggleMode}/>
<div className="container">
<TextForm heading="Enter your Text here" mode={mode} />
{/* <About/> */}
</div>

</>
  );
}

export default App;
