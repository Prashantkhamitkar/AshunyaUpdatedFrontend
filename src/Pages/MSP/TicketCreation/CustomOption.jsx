import React from "react";
import { components } from "react-select";

const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      {props.data.__isNew__ ? (
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary btn-rounded waves-effect waves-light"
            onClick={(e) => {
              e.stopPropagation();
              props.onAddCustomer();
            }}
          >
            {props.data.label}
          </button>
        </div>
      ) : (
        props.data.label
      )}
    </components.Option>
  );
};
export default CustomOption;