import React from 'react'

//estilos
import './slider.css'

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider-img">
                <img src={process.env.PUBLIC_URL + '/img/barco.jpg'}></img>
            </div>

            <div className="sliderSelector">
                
                <div className="sliderItem">
                    <span>1</span>
                    <div></div>
                </div>

                <div className="sliderItem">
                    <span>2</span>
                    <div></div>
                </div>

                <div className="sliderItem">
                    <span>3</span>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}

export default Slider
