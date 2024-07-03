import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface ContentComponentProps {
  content: string;
}

const ContentComponent: FunctionComponent<ContentComponentProps> = ({
  content,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-3xl pt-4 pb-1 font-normal text-texttertiary z-10"
      >
        {content}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="text-lg text-texttertiary z-10"
      >
        Already have an account?
        <button className="text-textprimary">&nbsp;Signin!</button>
      </motion.div>
    </>
  );
};

export default ContentComponent;
