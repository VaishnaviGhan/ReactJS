import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const[mode,SetMode] = useState('light');
  const[alert,SetAlert] = useState(null)
  const ShowAlert = (message,type)=>{
    SetAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 2000);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      ShowAlert("Dark Mode has been enabled","success");
      document.body.style.backgroundColor = '#203b7a';
    }
    else{
      SetMode('light')
      ShowAlert("Dark Mode has been enabled","success");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
<>
<Navbar title="Govinda Darshan" aboutText="Shift" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
<TextForm  ShowAlert={ShowAlert} heading="Enter your Text here" mode={mode} />
{/* <About/> */}
</div>

</>
  );
}

export default App;
