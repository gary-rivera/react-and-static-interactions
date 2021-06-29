//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

function IntroSection() {
  return (
    <IntroStyle id="intro-container">
      <InfoStyle id="description-styler">
        <motion.div className="title"> 
          <HideStyle>
            <motion.h2 variants={titleAnim}> 
              Gary <span>Rivera</span>
            </motion.h2>
          </HideStyle>
          <HideStyle>
            <motion.h3 variants={titleAnim}><span >Software </span> 
              Developer
            </motion.h3>
          </HideStyle>
        </motion.div>
        <motion.button onClick = {(evt) => {
            evt.preventDefault();
            window.open('/resume.pdf')
          }}
          variants={fade}
        >
          View Resume
        </motion.button>
      </InfoStyle>
    </IntroStyle>
  )
}

const IntroStyle = styled(AboutStyle)`
  /* border: 1px solid red; */
  padding: 3rem 20rem;
  min-height: 70vh;
`;

const InfoStyle = styled(DescriptionStyle)`
  padding: 3rem 5rem;
`;


export default IntroSection;