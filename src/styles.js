import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutStyle = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 20rem;
  color: white;

  p {
    max-width: 50vw;
  }

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const DescriptionStyle = styled.div`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const ImageStyle = styled.div`
  display: inline-block;
  z-index: 2;
  flex: 1;
  overflow: hidden;
  padding: 0rem 3rem;
  img {
    object-fit: cover;
    border-radius: 5px;
    width: 15vw;
    height: auto;
  }
`;

export const HideStyle = styled.div`
  overflow: hidden;
`;
