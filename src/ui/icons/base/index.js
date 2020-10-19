import React from "react";

const Icon = ({ children, active = false, size = 16,  onClick }) => {
  return (
    <svg
      onClick={onClick}
      style={{ height: size, width: size }}
      fill="none"
      stroke={active ? "blue" : "grey"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default Icon;
