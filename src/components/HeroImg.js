import "./HeroImgStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <video className="background-video" autoPlay loop muted>
                    <source src="https://cdn.pixabay.com/video/2019/10/09/27669-365224683_large.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="content">
                <p>HI, I'M JYOTI</p>
                <h1>FRONTEND DEVELOPER.</h1>
                <div className="buttons">
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;
