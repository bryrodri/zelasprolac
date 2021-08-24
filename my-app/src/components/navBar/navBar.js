import React, { useState, useEffect} from 'react'
import { connect } from "react-redux";

//lenguaje
import {navbar as navBarText} from '../../languageFunctions/navbar'

//estilos
import './navBar.css'

const NavBar = ({idioma}) => {

    useEffect(async()=>{
        console.log(idioma)
      },[]);

    return (
        <div className="navbar" >

            <div className="logo--navbar">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'}></img>
            </div>

            <div className="links-navBar">
                <span>{navBarText(idioma).contacto}</span>
                <span>{navBarText(idioma).comercio}</span>
                <span>{navBarText(idioma).empresa}</span>
                <span>{navBarText(idioma).inicio}</span>

                <div className="navBox"></div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(NavBar)
