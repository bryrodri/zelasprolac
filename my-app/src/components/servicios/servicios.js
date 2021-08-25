import React from 'react'
import { connect } from "react-redux";

//estilos
import './servicios.css'

//lenguaje
import {servicio as servicioText} from '../../languageFunctions/servicio'

const Servicios = ({idioma}) => {
    return (
        <div className="servicios--component" id="servicio"> 

            <div className="servicio-item">

                    <div className="servicio-itemHeader responsiveHeader-Servicio">
                        <h2 className="h2-Style">{servicioText(idioma).obras}</h2>
                    </div>
                
                <div className="servicio-itemImg">
                    <img src={process.env.PUBLIC_URL + '/img/servicio1.jpg'}></img>
                </div>

                <div className="servicio-itemText">
                    <div className="servicio-itemHeader responsiveHeader-Servicionone">
                        <h2 className="h2-Style">{servicioText(idioma).obras}</h2>
                    </div>

                    <p>{servicioText(idioma).obrasText}</p>
                    <p>{servicioText(idioma).obrasText2}</p>

                </div>
            </div>

            <div className="servicio-item">
                    <div className="servicio-itemHeader responsiveHeader-Servicio">
                        <h2 className="h2-Style">{servicioText(idioma).obras}</h2>
                    </div>

                <div className="servicio-itemImg">
                    <img src={process.env.PUBLIC_URL + '/img/servicio2.jpg'}></img>
                </div>

                <div className="servicio-itemText">
                    <div className="servicio-itemHeader responsiveHeader-Servicionone">
                        <h2 className="h2-Style">{servicioText(idioma).exportacion}</h2>
                    </div>

                    <p>{servicioText(idioma).exportacionText}</p>

                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(Servicios)
