import React from "react";
import {NavLink} from "react-router-dom";
import web from "../images/home.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
     <Common name="Welcom to about page" imgsrc={web} visit="/contact" btnname="Contact Now"/>
       
    </>
  );
};

export default About;
