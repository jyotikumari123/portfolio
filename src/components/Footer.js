import "./FooterStyles.css";
import React from 'react';
import {FaHome,FaMailBulk, FaPhone, FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    <div>
                        <p> Hno.D275 Downtown Street  </p>
                        <p> India </p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    +91 97091-51213</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    jyotikri31@gmail.com</h4>
                </div>
                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p> "Passionate about creating engaging and user-friendly web experiences, I am a beginner frontend developer eager to embark on an exciting journey in the world of web development. With a strong foundation in HTML, CSS, JavaScript and ReactJS, I am constantly expanding my skills and staying up-to-date with the latest trends and best practices in the industry"</p>
                    <div className="social">
                        <FaFacebook size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        <FaTwitter size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        <FaLinkedin size={20} style={{color:"#fff",marginRight: "2rem"}}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;