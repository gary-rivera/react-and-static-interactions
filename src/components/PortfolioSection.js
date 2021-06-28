import Project from "./Project";

// services icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { motion } from "framer-motion";

//Styles
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { titleAnim } from "../animation";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "../utils/useScroll";

function PortfolioSection() {
  const [element, controls] = useScroll();

  return (
    <ServicesStyle
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionStyle>
        <HideStyle> 
          <motion.h2 id="portfolio" variants={titleAnim}>
            <span>Past</span> Projects
          </motion.h2>
        </HideStyle>
        <CardsStyle>
          <Project className="project"/>
          <CardStyle>
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3> Sub-Title</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className="icon">
              <img src={teamwork} alt="teamwork"/>
              <h3> Sub-Title</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className="icon">
              <img src={diaphragm} alt="aperture"/>
              <h3> Sub-Title</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
          <CardStyle>
            <div className="icon">
              <img src={money} alt="money icon"/>
              <h3> Sub-Title</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyle>
        </CardsStyle>
      </DescriptionStyle>
    </ServicesStyle>
  )
}

const ServicesStyle = styled(AboutStyle)`
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const CardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const CardStyle = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      /* margin-left: 1rem; */
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default PortfolioSection;