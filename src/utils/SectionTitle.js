import { motion } from "framer-motion";
import styled from "styled-components";

function SectionTitle(props) {
  const {title} = props;
  console.log(title.toLowerCase())

  return (     
    <TitleStyle>
      <LineStyle />
        <span id={props.title.toLowerCase()}>0{props.index}. </span><h2>{props.title}</h2>
        <LineStyle />
    </TitleStyle>
  )
}

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  h2 {
    padding: 0;
  }
  span{
    font-size: 2rem;
    padding-right: 0.5rem;
  }
`;

const LineStyle = styled.div`
  width: 40%;
  border-top: 1px solid rgba(255, 255, 255, 0.25); 
  margin: 0rem 1rem;
`;

export default SectionTitle;