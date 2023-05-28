import "./HeroImgStyles.css";

import React from 'react';
import img1 from "../assets/img1.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={img1} alt="introimg"/>
                </div>
                <div className="content">
                    <p> HI, I'M JYOTI </p>
                    <h1>FRONTEND DEVELOPER.</h1>
                    <div> 
                        <Link to="/project" className="btn">Projects</Link>
                    
                        <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}
export default HeroImg;