import React from "react";

import { About as AboutComponent } from "../components/AboutSection/About";
import { Principals } from "../components/PrincipalSection/Principals";
import { Footer } from "../components";

const About = () => {
  return (
    <>
      <AboutComponent />
      <Principals />
    </>
  );
};

export default About;
