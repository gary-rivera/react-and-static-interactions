import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import FaqSection from '../components/FaqSection';

import { motion } from 'framer-motion';
import { pageAnimation } from "../animation"
import ScrollTop from '../utils/ScrollTop';


function Main() {
  return (
    <motion.div 
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    > 
      <IntroSection />
      <AboutSection />
      <PortfolioSection />
      <FaqSection/>
      <ScrollTop />
    </motion.div>
  );
}

export default Main;