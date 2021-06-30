import SectionTitle from "../utils/SectionTitle";
import Project from "./Project";
import profilePic from '../img/profile_pic4.jpeg'

//Styling
import styled from "styled-components";
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, scrollReveal } from '../animation'
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
        <AboutContainerStyle id="hereIAm">
          <TextStyle>
            <motion.p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta deleniti eos unde nobis esse, cupiditate molestias deserunt nemo. Repellat officiis, reprehenderit mollitia voluptatem quasi animi inventore doloremque architecto error aliquid nihil reiciendis. 
              <br/>
              Fugit fuga quae optio magnam commodi laborum nobis est quas, consequatur alias quidem, aliquam modi, eaque laboriosam debitis sequi repudiandae amet. Voluptatem nulla porro animi dicta laudantium ducimus eos atque magni, assumenda recusandae quae maxime vitae temporibus labore alias illo consequatur expedita amet sequi fugiat quaerat ex qui autem quis! 
              <br/>
              Vel officiis laboriosam molestias expedita nihil, recusandae aliquid temporibus nulla, totam quisquam sint in sequi, possimus maiores!
            </motion.p>
            <ul>
              <li>Javascript (ES6+)</li>
              <li>React.js (v17.0.2)</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Flask</li>
              <li>Elm</li>
            </ul>
          </TextStyle>
          <ImageStyle>
            <img src={profilePic} alt="profile portrait"/>
          </ImageStyle>
        </AboutContainerStyle>
      </DescriptionStyle>
      {/* <Wave /> */}
    </AboutStyle>
  )
}

const TextStyle = styled.div`
  border: 1px solid rgba(255, 255, 255, 1);
  display: inline-block;
  

  /* appearance  */
  /* background: rgba(82,183,136, 0.35); */
  border-radius: 5px;
  height: 45%;
  width: 30vw;
  
  p {
    /* text */
    padding: 1.5rem;
    font-size: 0.9rem;
    font-weight: light;
    color: rgba(244, 244, 244, 0.75);
  }
`;

const AboutContainerStyle = styled.div`
  display:flex;
  justify-content: center;
  margin: auto;
  width: 50vw;
`;

export default AboutSection;