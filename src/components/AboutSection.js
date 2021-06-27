import home1 from "../img/home1.png";
import { Document, Page } from 'react-pdf';
import { useHistory } from 'react-router-dom';

//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

function AboutSection() {
  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );
  
  const history = useHistory();


  return (
    <AboutStyle>
      <AboutMeStyle>
        <motion.div className="title"> 
          <HideStyle>
            <motion.h2 variants={titleAnim}> 
              Gary <span>Rivera</span>
            </motion.h2>
          </HideStyle>
          <JobTitleStyle>
            <motion.h3 variants={titleAnim}><span> Software</span> Developer</motion.h3>
          </JobTitleStyle>
        </motion.div>
        <motion.a
          className="resume-button" 
          href="/resume.pdf" 
          target="_blank" rel="noopener noreferrer"
        // onClick = {(evt) => {
        //   evt.preventDefault();
        //   window.open('/resume.pdf')
        // }}
        variants={fade}
        > View Resume</motion.a>
      </AboutMeStyle>
      <ImageStyle> 
        <motion.img 
        variants={photoAnim} 
        initial="hidden"
        animate="show"
        src={home1} 
        alt="landing page profile pic"/>
      </ImageStyle>
      <Wave />
    </AboutStyle>
  )
}

const AboutMeStyle = styled(DescriptionStyle)`
  /* padding: 0rem 5rem; */
`;

const JobTitleStyle = styled(HideStyle)`
  /* opacity: 0.65; */
`;
export default AboutSection;