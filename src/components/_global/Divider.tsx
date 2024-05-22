import React from "react";

interface DividerProps {
  width?: string;
}

const Divider = ({ width = "w-full" }: DividerProps) => {
  return <hr className={`border-t border-gray-300 ${width}`} />;
};

export default Divider;
