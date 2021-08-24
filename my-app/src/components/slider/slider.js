import React, { useState, useEffect} from 'react'
import { connect } from "react-redux";

//idioma
import {slider as SliderText} from '../../languageFunctions/slider'

//estilos
import './slider.css'

const Slider = ({idioma}) => {
    const [imgSelected, setImgSelected] = useState(1)

    return (
        <div className="slider-container" id="inicio">

            <div className="slider-img" style={{top:0, left:imgSelected===1?"0%":"-100%"}}>
                <img src={process.env.PUBLIC_URL + '/img/taladro.jpg'}></img>
            </div>

            <div className="slider-img" style={{top:0, left:imgSelected===1?"100%": imgSelected===2?"0%":"-100%"}}>
                <img src={process.env.PUBLIC_URL + '/img/barco.jpg'}></img>
            </div>

            <div className="slider-img" style={{top:0, left:imgSelected===3?"0%":"100%"}}>
                <img src={process.env.PUBLIC_URL + '/img/taladro.jpg'}></img>
            </div>

            <div className="text-slider" style={{top:"10px", left:"4%", opacity:imgSelected===1?"1":"0", width:"28%"}}>
                <span>{SliderText(idioma).primera}</span>
            </div>

            <div className="text-slider" style={{top:"10px", right:"4%", opacity:imgSelected===2?"1":"0", width:"23%", textAlign:"right"}}>
                <span>{SliderText(idioma).segunda}</span>
            </div>

            <div className="text-slider" style={{top:"10px", left:"4%", opacity:imgSelected===3?"1":"0", width:"28%"}}>
                <span>{SliderText(idioma).tercera}</span>
            </div>

            <div className="sliderSelector">
                
                <div className="sliderItem" onClick={()=>{setImgSelected(1)}}>
                    <span>1</span>
                    <div></div>
                </div>

                <div className="sliderItem" onClick={()=>{setImgSelected(2)}}>
                    <span>2</span>
                    <div></div>
                </div>

                <div className="sliderItem" onClick={()=>{setImgSelected(3)}}>
                    <span>3</span>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    idioma: state.idioma,
    
  });

export default connect(mapStateToProps, null)(Slider)
