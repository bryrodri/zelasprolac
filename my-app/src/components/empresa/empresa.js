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
                   <h2>{empresaText(idioma).headerTitle}</h2> 
                </div>

                <div className="empresa-headerSecondText">
                    <p>{empresaText(idioma).headerText}</p>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });


export default connect(mapStateToProps, null)(Empresa)
