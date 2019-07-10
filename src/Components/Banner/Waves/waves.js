import React from "react";
import "./waves.scss"
import WavesImg from "../../../Images/grafiki/wave-bot.png"
import WavesImg1 from "../../../Images/grafiki/wave-mid.png"
import WavesImg2 from "../../../Images/grafiki/wave-top.png"


function Waves() {
    return (
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop"
                     style={{backgroundImage: `url(${WavesImg})`}}>

                </div>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle"
                     style={{backgroundImage: `url(${WavesImg1})`}}>

                </div>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom"
                     style={{backgroundImage: `url(${WavesImg2})`}}>

                </div>
            </div>

        </div>
    )
}

export default Waves;