import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Smith</span> <br />
            Website Designer
          </span>
          <p className="introPara">I am a skilled web designer with experience in creating <br />visually appealing and user friendly websites. </p>
          <Link><button className="btn"><img src={btnImg} alt="Hire me" className="btnImg" />Hire me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
