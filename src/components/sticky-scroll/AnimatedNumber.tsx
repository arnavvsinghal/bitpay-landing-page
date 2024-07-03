import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
}
const AnimatedNumber: FunctionComponent<AnimatedNumberProps> = ({ value }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      console.log(inView);
      setVal(value);
    }
  }, [inView, value]);

  const spring = useSpring(val, { mass: 0.8, stiffness: 10, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(val);
  }, [spring, val]);

  return (
    <div>
      <motion.span ref={ref}>{display}</motion.span>+
    </div>
  );
};
export default AnimatedNumber;
