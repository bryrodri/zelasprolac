import './App.css';

//componentes
import NavBar from './components/navBar/navBar'
import Slider from './components/slider/slider'
import Empresa from './components/empresa/empresa'
import Servicios from './components/servicios/servicios'
import Contacto from './components/contacto/contacto'

function App() {
  return (
    <>
      <NavBar></NavBar>

      <div className="pageSection">
        <Slider></Slider>
        <Empresa></Empresa>
        <Servicios></Servicios>
        <Contacto></Contacto>
      </div>

    </>
  );
}

export default App;
