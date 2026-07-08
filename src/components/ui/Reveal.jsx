import { motion } from "framer-motion";
import { fadeUp, viewport } from "../../lib/motion";

/**
 * Scroll-reveal wrapper. Renders a motion element that fades/slides in
 * the first time it enters the viewport.
 */
const Reveal = ({
  as = "div",
  children,
  className = "",
  delay = 0,
  variants = fadeUp,
  ...rest
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
