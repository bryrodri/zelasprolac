import React from 'react'
import { connect } from "react-redux";

//estilos
import './contacto.css'

//lenguaje
import {contacto as contactoText} from '../../languageFunctions/contacto'

const Contacto = ({idioma}) => {
    return (
        <div className="contacto-contenedor">

            <div className="contacto-header">
                <span className="contacto-titles">{contactoText(idioma).contactanos}</span>
            </div>

            <div className="contacto-subContainer">
                
                <div className="contacto-item">
                    <div className="contactoItemHeader">
                        <span className="contacto-titles">{contactoText(idioma).visitanos}</span>
                    </div>

                    <span>Rua da Alfândega, 78, 3º andar </span>
                    <span>9000-59 Funchal – Portugal</span>
                </div>

                <div className="contacto-item">
                    <div className="contactoItemHeader">
                        <span className="contacto-titles">{contactoText(idioma).llamanos}</span>
                    </div>

                    <span>Tel. +351 291 091 255 </span>
                    <span>Fax. +351 291 221 66</span>
                </div>

                <div className="contacto-item">
                    <div className="contactoItemHeader">
                        <span className="contacto-titles">{contactoText(idioma).escribenos}</span>
                    </div>

                    <span>info@zelasprolac.pt </span>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(Contacto)
