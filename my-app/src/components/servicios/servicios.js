import React, { useRef, useEffect } from 'react'
import { connect } from "react-redux";

import Fade from 'react-reveal/Fade';

//estilos
import './servicios.css'

//lenguaje
import {servicio as servicioText} from '../../languageFunctions/servicio'



const Servicios = ({idioma}) => {

    
    return (
        <div className="servicios--component" id="servicio" > 

            <div className="servicio-item">

                    <Fade right duration={1500}>
                    <div className="servicio-itemHeader responsiveHeader-Servicio">
                        <h2 className="h2-Style">{servicioText(idioma).obras}</h2>
                    </div>
                    </Fade>

                <div className="servicio-itemImg">
                    <Fade duration={1500}>
                    <img src={process.env.PUBLIC_URL + '/img/servicio2.jpg'} id="imagenAnimate"></img>
                    </Fade>
                </div>

                <div className="servicio-itemText">
                    <Fade right duration={1500}>
                    <div className="servicio-itemHeader responsiveHeader-Servicionone">
                        <h2 className="h2-Style">{servicioText(idioma).obras}</h2>
                    </div>
                    </Fade>

                    <Fade duration={1500}>
                    <p>{servicioText(idioma).obrasText}</p>
                    <p>{servicioText(idioma).obrasText2}</p>
                    </Fade>
                </div>
            </div>

            <div className="servicio-item">

                <Fade right duration={1500}>
                    <div className="servicio-itemHeader responsiveHeader-Servicio">
                        <h2 className="h2-Style">{servicioText(idioma).obras}</h2>
                    </div>
                </Fade>
                <div className="servicio-itemImg">
                    <Fade duration={1500}>
                    <img src={process.env.PUBLIC_URL + '/img/servicio1.jpg'} ></img>
                    </Fade>
                </div>

                <div className="servicio-itemText">
                    <Fade right duration={1500}>
                    <div className="servicio-itemHeader responsiveHeader-Servicionone">
                        <h2 className="h2-Style">{servicioText(idioma).exportacion}</h2>
                    </div>
                    </Fade>

                    <Fade duration={1500}>
                    <p>{servicioText(idioma).exportacionText}</p>
                    </Fade>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(Servicios)
