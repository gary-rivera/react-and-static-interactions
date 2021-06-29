import SectionTitle from "../utils/SectionTitle";
import Project from "./Project";

//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from '../animation'
import { scrollReveal } from "../animation";
import { useScroll } from "../utils/useScroll";
import Wave from './Wave'


//Styles



function AboutSection() {
  const [element, controls] = useScroll();

  return (
    <AboutStyle 
      id="about"
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionStyle>
        <SectionTitle title="About" index="1"/>
      </DescriptionStyle>
      {/* <Wave /> */}
    </AboutStyle>
  )
}

export default AboutSection;

{/* <PortfolioStyle
variants={scrollReveal}
initial="hidden"
animate={controls}
ref={element}
>
<DescriptionStyle>
  <HideStyle>
    <motion.h2 id="portfolio" variants={titleAnim}>
      <SectionTitle title="Portfolio" index="2"/>
    </motion.h2>
  </HideStyle>
  <CardsStyle>
    <Project />
  </CardsStyle>
</DescriptionStyle>
</PortfolioStyle> */}