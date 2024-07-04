import React from "react";
import { Link } from "react-router-dom";


const StickyButton = ({toggle}) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-2  justify-content-end">
        <Link
          to={"/ticketcreation"}
          className="btn btn-rounded btn-info waves-effect waves-light"
         
        >
          <i className="ri-check-line align-middle me-2"></i> Create Ticket
        </Link>
        {toggle && (
          <>
            <button
              type="button"
              className="btn btn-rounded btn-warning waves-effect waves-light"
              
            >
              <i className="fa fa-times me-1"></i> Close Selected Ticket
            </button>
            <button
              type="button"
              className="btn btn-rounded btn-danger waves-effect waves-light"
            >
              <i className="fa fa-trash me-1"></i> Delete Selected Ticket
            </button>
            <button
              type="button"
              className="btn btn-rounded btn-primary  waves-effect waves-light"
              style={{ backgroundColor: "#C25E71" }}
            >
              {" "}
              <i className="fa fa-user me-2"></i>
              Assign To
            </button>
          </>
        )}
        <button
          type="button"
          className="btn btn-rounded btn-primary waves-effect waves-light"

        >
          <i className="fa fa-tasks me-2"></i> Assign To Me
        </button>
      </div>
    </>
  );
};

export default StickyButton;
