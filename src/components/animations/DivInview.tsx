import { PropsWithChildren, useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

const variants = {
  visible: { opacity: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0 },
};

export const DivInview = (props: PropsWithChildren) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px", once:true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={variants}
      initial="hidden"
    >
      {props.children}
    </motion.div>
  );
};
