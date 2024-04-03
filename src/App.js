import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
<>
<Navbar title="Govinda Darshan" aboutText="Shift"/>
<div className="container">
<TextForm heading="Enter your Text here"/>
</div>

</>
  );
}

export default App;
