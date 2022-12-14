import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Componentes/Navbar';
import PantallaInicio from './Pantallas/PantallaInicio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PantallaInicio/>
    </div>
  );
}

export default App;
