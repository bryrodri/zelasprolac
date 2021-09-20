import './App.css';

//componentes
import NavBar from './components/navBar/navBar'
import Slider from './components/slider/slider'
import Empresa from './components/empresa/empresa'
import Servicios from './components/servicios/servicios'
import Contacto from './components/contacto/contacto'
import SocialMedia from './components/socialMedia/socialMedia'


function App() {
  return (
    <>
      <NavBar></NavBar>
      <SocialMedia></SocialMedia>

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
