import { motion, useAnimate, useInView } from "motion/react";

import ScrollChildren from "../interfaces/scroll";
import { useEffect } from "react";

const Scroll: React.FC<ScrollChildren> = ({ children }) => { 
  const [scope, animate] = useAnimate(); 
  const isInView = useInView(scope, {
    amount: 0.2
  });
  
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.5 })
    } 
  }, [isInView])
  
  return (
    <motion.div
      ref={ scope }
      style={{
        opacity: 0, 
        y: 30
      }}
    >
      { children }
    </motion.div>
  )
}

export default Scroll;