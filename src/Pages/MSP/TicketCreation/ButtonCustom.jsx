import React from "react";

const ButtonCustom = ({ onSubmit, onCancel }) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-2 mb-5 justify-content-end">
        <button
          type="button"
          className="btn btn-success waves-effect waves-light"
          onClick={onSubmit}
        >
          <i className="ri-check-line align-middle me-2"></i> Submit
        </button>

        <button
          type="button"
          className="btn btn-danger waves-effect waves-light"
          onClick={onCancel}
        >
          <i className="ri-close-line align-middle me-2"></i> Cancel
        </button>
      </div>
    </>
  );
};

export default ButtonCustom;
