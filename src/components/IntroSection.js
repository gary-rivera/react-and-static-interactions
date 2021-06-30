//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade } from '../animation'
// TODO: decide if wave can be included somewowimport Wave from './Wave'

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
        <HideStyle>
          <motion.p variants={titleAnim}>
            I'm an outgoing challenge-seeker intrigued by offering creative insight to real-world challenges. 
            <br/>
            Currently interning as a Software Developer at <a href="http://numbersapi.com/">Numbers API</a>. 
          </motion.p>
        </HideStyle>
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
  padding: 3rem 20rem;
  min-height: 70vh;

  h2 {

    text-align: center;
    font-size: 5rem;
    font-weight: bold;
  }
  
  h3, h3 span {
    font-size: 3.5rem;
    font-weight: light;
  }
  p {
    /* border: 1px solid red; */
    /* display and box model */
    padding: 1.5rem 0rem;
    max-width: 25vw;
    /* align-self: flex-start; */

    /* text */
    font-size: 1rem;
    font-weight: light;
    text-align: center;
    color: rgba(244, 244, 244, 0.75);

    /* font-weight: lighter; */
  }

  p a{
    font-family: 'Chakra Petch', sans-serif;
    color: rgba(82,183,136, 1);
  }

  p a:hover{
    color: rgba(82,183,136, .75);
    transition: 0.3s;
  }
`;

const InfoStyle = styled(DescriptionStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 5rem;
  
  p {
    align-self: flex-start;
  }
`;


export default IntroSection;