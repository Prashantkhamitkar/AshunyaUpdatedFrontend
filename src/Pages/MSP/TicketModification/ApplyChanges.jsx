import React from "react";

const ApplyChanges = ({ onSubmit, onCancel }) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-2 mb-5 justify-content-end">
        <button
          type="button"
          className="btn btn-info waves-effect waves-light"
          onClick={onSubmit}
        >
          <i className="ri-check-line align-middle me-2"></i> Apply Changes
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

export default ApplyChanges;
