import { useState } from "react";
import { motion } from "framer-motion";

function Toggle({children, title}) {
  const [ toggle,setToggle ] = useState(false)

  return (
    <motion.div 
      onClick={() => setToggle(!toggle)}
      layout 
      className="question"
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
}

export default Toggle;