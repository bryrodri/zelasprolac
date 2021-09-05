import React from 'react'
import { connect } from "react-redux";

//idioma
import {empresa as empresaText} from '../../languageFunctions/empresa'

import Fade from 'react-reveal/Fade';

//estilo
import './empresa.css'

const Empresa = ({idioma}) => {
    return (
        <div className="empresa-component" id="empresa">

            <div className="empresa-header">

                <div className="empresa-headerText">
                   <Fade left duration={1500}>
                   <h2 className="h2-Style">{empresaText(idioma).headerTitle}</h2> 
                   </Fade>
                </div>

                <div className="empresa-headerSecondText">
                    <Fade duration={1500}>
                    <p>{empresaText(idioma).headerText}</p>
                    </Fade>
                </div>
            </div>


            <div className="empresa-componentContenido">
                <div className="empresa-contenidoItem">
                    <Fade duration={1500}>
                    <img src={process.env.PUBLIC_URL + '/img/empresa1.jpg'}></img>
                    </Fade >
                    <div className="empresa-ciText">
                        <div className="empresa-sub">
                            <Fade duration={1500}>
                            <h3>{empresaText(idioma).mision}</h3>
                            <p>{empresaText(idioma).misionText}</p>
                            </Fade>
                        </div>
                        <div className="empresa-sub" >
                            <Fade duration={1500}>
                            <h3>{empresaText(idioma).vision}</h3>
                            <p>{empresaText(idioma).visionText}</p>
                            </Fade>
                        </div>
                    </div>

                </div>

                <div className="empresa-contenidoItem">

                    <Fade duration={1500}>
                    <img src={process.env.PUBLIC_URL + '/img/empresa2.jpg'}></img>
                    </Fade>

                    <div className="empresa-ciText">

                        <Fade duration={1500}>
                        <div className="empresa-contenidoSpecial">
                            <h2 className="h2-Style">{empresaText(idioma).subTitle}</h2>
                        </div>
                        </Fade >

                        <Fade duration={1500}>
                        <div className="empresa-subSecond">
                            <h3>•{empresaText(idioma).responsabilidad}</h3>
                            <p>{empresaText(idioma).responsabilidadText}</p>
                        </div>
                        </Fade>
                        
                        <Fade duration={1500}>
                        <div className="empresa-subSecond">
                        <h3>•{empresaText(idioma).fiabilidad}</h3>
                            <p>{empresaText(idioma).fiabilidadText}</p>
                        </div>
                        </Fade>


                        <Fade duration={1500}>
                        <div className="empresa-subSecond">
                        <h3>•{empresaText(idioma).excelencia}</h3>
                            <p>{empresaText(idioma).excelenciaText}</p>
                        </div>
                        </Fade>

                        <Fade duration={1500}>
                        <div className="empresa-subSecond">
                        <h3>•{empresaText(idioma).lealtad}</h3>
                            <p>{empresaText(idioma).lealtadText}</p>
                        </div>
                        </Fade>
                    </div>

                </div>

            </div>


            {/* <div className="empresa-contenido">
                <div className="empresa-contenidoImagenes">
                    <img src={process.env.PUBLIC_URL + '/img/empresa1.jpg'}></img>
                    <img src={process.env.PUBLIC_URL + '/img/empresa1.jpg'}></img>
                </div>

                <div className="empresa-texto">

                </div>

            </div> */}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });


export default connect(mapStateToProps, null)(Empresa)
