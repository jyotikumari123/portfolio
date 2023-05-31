import "./AboutMeStyles.css";
import {Link} from "react-router-dom";

import React from "react";

const PricingCard = () =>{
    return (

        <div className="aboutme">
        <h3> EDUCATION </h3>
            <div className="card-container">
                <div className="card">
                    <p className="btc"> Matriculation </p>
                    <span className="bar"></span>
                     <p>Oxford Public School, Ranchi</p>
                    <p> 89% </p>
                    
                  
                </div>

                <div className="card">
                    <p className="btc"> Intermediate </p>
                    <span className="bar"></span>
                     <p>Oxford Public School, Ranchi</p>
                    <p> 64% </p>
                   
                </div>

                <div className="card">
                    <p className="btc"> Bachelor Of Computer Applications </p>
                    <span className="bar"></span>
                     <p>Birla Institute of Technology, Ranchi</p>
                    <p> 71% </p>
                   
                </div>
            </div>
        
        </div>
    )
}
export default PricingCard;