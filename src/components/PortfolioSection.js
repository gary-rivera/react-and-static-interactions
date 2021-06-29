import Project from "./Project";
import { motion } from "framer-motion";
import SectionTitle from "../utils/SectionTitle";

//Styles
import { AboutStyle, DescriptionStyle , ImageStyle, HideStyle } from '../styles.js';
import { titleAnim } from "../animation";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "../utils/useScroll";

function PortfolioSection() {
  const [element, controls] = useScroll();

  return (
    <PortfolioStyle
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
    </PortfolioStyle>
  )
}

const PortfolioStyle = styled(AboutStyle)`
  display: flex;
  justify-content: center;
  h2 {
    /* padding-bottom: 5rem; */
    text-align: center;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const ProjectBoardStyle = styled(DescriptionStyle)`
  display: flex;
  justify-content: center;
`;

const CardsStyle = styled.div`
  display: flex;
  justify-content: center;

  /* flex-wrap: wrap; */
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