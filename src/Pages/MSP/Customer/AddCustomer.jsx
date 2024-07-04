import React, { useState } from "react";
import AddCustomerModal from "./AddCustomerModal";

const AddCustomer = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="d-flex flex-wrap gap-2 mb-3 justify-content-end">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          onClick={toggleModal}
        >
          <i className="fa fa-plus-square align-middle me-2"></i> Add Customer
        </button>
      </div>
      <AddCustomerModal modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default AddCustomer;
