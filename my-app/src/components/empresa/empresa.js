import React from 'react'
import { connect } from "react-redux";

//idioma
import {empresa as empresaText} from '../../languageFunctions/empresa'

//estilo
import './empresa.css'

const Empresa = ({idioma}) => {
    return (
        <div className="empresa-component" id="empresa">

            <div className="empresa-header">

                <div className="empresa-headerText">
                   <h2 className="h2-Style">{empresaText(idioma).headerTitle}</h2> 
                </div>

                <div className="empresa-headerSecondText">
                    <p>{empresaText(idioma).headerText}</p>
                </div>
            </div>


            <div className="empresa-componentContenido">
                <div className="empresa-contenidoItem">
                    <img src={process.env.PUBLIC_URL + '/img/empresa1.jpg'}></img>

                    <div className="empresa-ciText">
                        <div className="empresa-sub">
                            <h3>{empresaText(idioma).mision}</h3>
                            <p>{empresaText(idioma).misionText}</p>
                        </div>
                        <div className="empresa-sub" >
                            <h3>{empresaText(idioma).vision}</h3>
                            <p>{empresaText(idioma).visionText}</p>
                        </div>
                    </div>

                </div>

                <div className="empresa-contenidoItem">
                    <img src={process.env.PUBLIC_URL + '/img/empresa2.jpg'}></img>

                    <div className="empresa-ciText">
                        <div className="empresa-contenidoSpecial">
                            <h2 className="h2-Style">{empresaText(idioma).subTitle}</h2>
                        </div>

                        <div className="empresa-subSecond">
                            <h3>•{empresaText(idioma).responsabilidad}</h3>
                            <p>{empresaText(idioma).responsabilidadText}</p>
                        </div>
    
                        <div className="empresa-subSecond">
                        <h3>•{empresaText(idioma).fiabilidad}</h3>
                            <p>{empresaText(idioma).fiabilidadText}</p>
                        </div>

                        <div className="empresa-subSecond">
                        <h3>•{empresaText(idioma).excelencia}</h3>
                            <p>{empresaText(idioma).excelenciaText}</p>
                        </div>

                        <div className="empresa-subSecond">
                        <h3>•{empresaText(idioma).lealtad}</h3>
                            <p>{empresaText(idioma).lealtadText}</p>
                        </div>
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
