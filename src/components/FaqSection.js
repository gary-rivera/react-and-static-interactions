import styled from "styled-components";
import { AboutStyle } from '../styles';
import { useState } from 'react';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from "./useScroll";
import { scrollReveal } from '../animation'

function FaqSection() {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h2> Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.
              </p>
            </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
};

const Faq = styled(AboutStyle)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;


export default FaqSection;