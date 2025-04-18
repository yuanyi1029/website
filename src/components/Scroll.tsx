import { motion } from "motion/react";

import ScrollChildren from "../interfaces/scroll";

const Scroll: React.FC<ScrollChildren> = ({ children }) => { 
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5
        }
      }}
      viewport={{ 
        once: true,
        amount: 0.5
      }}
    >
      { children }
    </motion.div>
  )
}

export default Scroll;