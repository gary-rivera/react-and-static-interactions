import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


function Nav() {
  const { pathname } = useLocation();
  return (
    <NavStyle>
      <h1> <Link to="/" id="logo">@GaryDevelops</Link></h1>
      <ul>
        <li>
          <Link to="/"><span id="alt_font">01. </span>About</Link>
        </li>
        <li>
          <Link to="/work"><span id="alt_font">02. </span>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact"><span id="alt_font">03. </span>Connect</Link>
          <Line
            transition={{duration: 0.75}}
            initial={{ width: "0%" }}
            animate={{ width: pathname.startsWith("/contact") ? "50%" : "0%" }}
          />
        </li>
      </ul> 
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 5;
  position: sticky;
  top: 0;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #00695C;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
    width: 100%;

  }
`;

export default Nav;