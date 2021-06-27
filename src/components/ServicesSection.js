// services icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { AboutStyle, DescriptionStyle , ImageStyle } from '../styles.js';
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";



function ServicesSection() {
  const [element, controls] = useScroll();

  return (
    <ServicesStyle
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <DescriptionStyle>
        <h2>High <span> quality</span> services</h2>
        <CardsStyle>
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
      <ImageStyle>
        <img alt="camera" src={home2} />
      </ImageStyle>
    </ServicesStyle>
  )
}

const ServicesStyle = styled(AboutStyle)`
  h2 {
    padding-bottom: 5rem;
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

export default ServicesSection;