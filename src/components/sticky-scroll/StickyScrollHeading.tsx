import React, { FunctionComponent } from "react";
interface StickyScrollHeadingProps {
  children: React.ReactNode;
}
const StickyScrollHeading: FunctionComponent<StickyScrollHeadingProps> = ({
  children,
}) => {
  return (
    <div className="text-8xl px-4 pt-4 text-center text-textprimary font-semibold">
      {children}
    </div>
  );
};

export default StickyScrollHeading;
