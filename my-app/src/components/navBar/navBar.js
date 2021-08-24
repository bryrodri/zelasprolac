import React, { useState, useEffect} from 'react'
import { connect } from "react-redux";

//estilos
import './navBar.css'

const NavBar = ({idioma}) => {

    useEffect(async()=>{
        console.log(idioma)
      },[]);

    return (
        <div className="navbar">

            <div className="logo--navbar">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'}></img>
            </div>

            <div className="links-navBar">
                <span>Contacto</span>
                <span>Comercio & Servicios</span>
                <span>Empresa</span>
                <span>Inicio</span>

                <div className="navBox"></div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(NavBar)
