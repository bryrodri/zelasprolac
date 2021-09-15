import React from 'react'
import { connect } from "react-redux";

//estilos
import './contacto.css'

//lenguaje
import {contacto as contactoText} from '../../languageFunctions/contacto'

import Fade from 'react-reveal/Fade';

const Contacto = ({idioma}) => {

    const openWindow=(url)=>{
        var win = window.open(url, '_blank');
      }

    return (

        <div className="contacto-contenedor" id="contacto" >

            <Fade duration={1500}>
            <div className="contacto-header">
                <span className="contacto-titles">{contactoText(idioma).contactanos}</span>
            </div>
            </Fade>
            <div className="contacto-subContainer">
                
                <div className="contacto-item">
                <Fade left duration={1500}>
                    <div className="contactoItemHeader">
                        <span className="contacto-titles">{contactoText(idioma).visitanos}</span>
                    </div>

                    <span>Rua da Alfândega, 78, 3º andar </span>
                    <span>9000-59 Funchal – Portugal</span>
                </Fade>
                </div>

                <div className="contacto-item">
                    <Fade duration={2500}>
                    <div className="contactoItemHeader">
                        <span className="contacto-titles">{contactoText(idioma).llamanos}</span>
                    </div>

                    <span>Tel. +351 291 091 255 </span>
                    <span>Fax. +351 291 221 66</span>
                    </Fade >
                </div>

                <div className="contacto-item">
                    <Fade right duration={1500}>
                    <div className="contactoItemHeader">
                        <span className="contacto-titles">{contactoText(idioma).escribenos}</span>
                    </div>

                    <span>info@zelasprolac.pt </span>
                    </Fade>
                </div>
            </div>

            <div className="separador-contacto">

            </div>

            <Fade  duration={1500}>
            <div className="icons-redes">
                
                <svg onClick={()=>{openWindow("https://www.facebook.com/Zelasprolac-107094071644588/")}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="awSgIinfw5_FS5MLHI~A9a" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"/><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"/><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"/><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"/></svg>
                

       
                <svg onClick={()=>{openWindow("https://www.linkedin.com/in/zelas-prolac-19021b217/")}} height="38px" width="38px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#069"/><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#fff"/></g></svg>
           
            </div>
            </Fade>
            
        </div>

    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(Contacto)
