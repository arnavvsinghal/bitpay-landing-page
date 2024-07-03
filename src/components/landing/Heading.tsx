import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface HeadingComponentProps {
  heading: string;
}

const HeadingComponent: FunctionComponent<HeadingComponentProps> = ({
  heading,
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.1, 1], opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text-9xl py-4 font-medium text-textprimary z-10"
    >
      {heading}
    </motion.div>
  );
};

export default HeadingComponent;
