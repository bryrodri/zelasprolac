import React from 'react'
import { connect } from "react-redux";

//estilos
import './contacto.css'

//lenguaje
import {contacto as contactoText} from '../../languageFunctions/contacto'

import Fade from 'react-reveal/Fade';

const Contacto = ({idioma}) => {
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
            
        </div>

    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(Contacto)
