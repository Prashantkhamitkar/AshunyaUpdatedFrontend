import React from "react";
import { components } from "react-select";

const CustomMenuList = (props) => {
  return (
    <components.MenuList {...props}>
      <div
        style={{ maxHeight: "160px", overflowY: "auto", paddingRight: "10px" }}
      >
        {props.children.filter((child) => child.props.data.value !== "add")}
      </div>
      <div
        style={{
          borderTop: "1px solid #e4e4e4",
          padding: "10px",
          backgroundColor: "#fff",
        }}
      >
        {props.children.find((child) => child.props.data.value === "add")}
      </div>
    </components.MenuList>
  );
};

export default CustomMenuList;
