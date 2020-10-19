import React from "react";
import Icon from "../../base";

const DescendingIcon = ({ active, onClick }) => {
  return (
    <Icon active={active} onClick={onClick}>
      <path d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
    </Icon>
  );
};

export default DescendingIcon;
