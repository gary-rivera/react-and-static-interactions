//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

function AboutSection() {
  return (
    <AboutStyle id="about">
      <DescriptionStyle>
        <motion.div className="title"> 
          <HideStyle>
            <motion.h2 variants={titleAnim}> 
              Gary <span>Rivera</span>
            </motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h3 variants={titleAnim}><span> Software</span> Developer</motion.h3>
          </HideStyle>
        </motion.div>
        <motion.p >
        I'm a software engineer who loves React and creative problem solving. I've just graduated from <span> Rithm School</span> and actively looking for my next team to contribute to!
        </motion.p>
        <motion.button
          onClick = {(evt) => {
            evt.preventDefault();
            window.open('/resume.pdf')
          }}
          variants={fade}
        >
          View Resume
        </motion.button>
      </DescriptionStyle>
      {/* <Wave /> */}
    </AboutStyle>
  )
}

export default AboutSection;