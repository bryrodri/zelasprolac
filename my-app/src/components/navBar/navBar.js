import React, { useState, useEffect} from 'react'
import { connect } from "react-redux";

//lenguaje
import {navbar as navBarText} from '../../languageFunctions/navbar'

//estilos
import './navBar.css'


//scroll
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const NavBar = ({idioma}) => {

    const redirect=(ubi)=>{
        // const anchor = document.querySelector(ubi)


        // anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        const HEADER_HEIGHT=100
        const element = document.getElementById(ubi);
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - HEADER_HEIGHT;
    
        window.scrollBy({
             top: offsetPosition,
             behavior: "smooth"
        });
    }

    return (
        <div className="navbar" >

            <div className="logo--navbar">
                <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo de Zelasprolac"></img>
            </div>

            <div className="links-navBar">
                
                
                
                <span onClick={()=>{redirect("inicio")}}>{navBarText(idioma).inicio}</span>


                <span onClick={()=>{redirect("empresa")}}>{navBarText(idioma).empresa}</span>
                <span onClick={()=>{redirect("servicio")}}>{navBarText(idioma).comercio}</span>
                

                <span onClick={()=>{redirect("contacto")}}>{navBarText(idioma).contacto}</span>
                
                <div className="navBox">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="35px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(NavBar)
