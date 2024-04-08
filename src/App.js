import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


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
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      SetMode('light')
      ShowAlert("Dark Mode has been enabled","success");
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - light Mode'
    }
  }

  // Green Mode Code
  const greenMode = ()=>{
    if(mode ==='light'){
      SetMode('green')
      document.body.style.backgroundColor = 'green';
    }
    else{
      SetMode('light') 
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
<>
<Router>
<Navbar title="Govinda Darshan" aboutText="About" mode={mode} toggleMode={toggleMode} greenMode={greenMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm  ShowAlert={ShowAlert} heading="Enter your Text here" mode={mode} />
           
          </Route>
</Switch>

{/* <About/> */}
</div>
</Router>
</>
  );
}

export default App;
