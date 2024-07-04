import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";

import CustomerModel from "../TicketCreation/CustomerModel";

const initialCustomerOptions = [
  { label: "Customer 1", value: "Customer 1" },
  { label: "Customer 2", value: "Customer 2" },
  { label: "Customer 3", value: "Customer 3" },
];

const initialContactOptions = [
  { label: "Customer 1", value: "Customer 1" },
  { label: "Customer 2", value: "Customer 2" },
  { label: "Customer 3", value: "Customer 3" },
];

const CustomerModi = ({ setCustomerData, reset,CustomerData }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [department, setDepartment] = useState("");
  const [modal, setModal] = useState(false);
  const [newCustomerContact, setNewCustomerContact] = useState("");
  const [showAdditionalPhone, setShowAdditionalPhone] = useState(false);
 

  const [customerOptions, setCustomerOptions] = useState(
    initialCustomerOptions
  );
  const [contactOptions, setContactOptions] = useState(initialContactOptions);

  useEffect(() => {
    setCustomerData({
      customer: selectedCustomer,
      contact: selectedContact,
      site: selectedSite,
      department,
    });
  }, [
    selectedCustomer,
    selectedContact,
    selectedSite,
    department,
    setCustomerData,
  ]);

  useEffect(() => {
    if (reset) {
      setSelectedCustomer(null);
      setSelectedContact(null);
      setSelectedSite(null);
      setDepartment("");
      setCustomerOptions(initialCustomerOptions);
    }
  }, [reset]);

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleSelectCustomer = (selectedOption) => {
    setSelectedCustomer(selectedOption);
  };

  const handleSelectContact = (selectedOption) => {
    setSelectedContact(selectedOption);
  };

  const handleSelectSite = (selectedOption) => {
    setSelectedSite(selectedOption);
  };

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  const toggleModal = () => {
    setModal(!modal);
    setShowAdditionalPhone(false);
  };

  const handleAddContact = () => {
    const newOption = { label: newCustomerContact, value: newCustomerContact };
    setContactOptions([...contactOptions, newOption]);
    setSelectedContact(newOption);
    setNewCustomerContact(""); // Reset the input field
    toggleModal();
  };

  return (
    <>
      <Row>
        <Col md={12}>
          <CardTitle className="mt-0">Customer</CardTitle>
          <Card body>
            <CardBody>
              <Row>
                <Col lg="6">
                  <div className="mb-3">
                    <Label>CUSTOMER</Label>
                    <Select
                      placeholder="Select Customer"
                      value={selectedCustomer}
                      onChange={handleSelectCustomer}
                      options={customerOptions}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                    />
                  </div>
                  <div className="mb-3">
                    <Label>CUSTOMER CONTACT</Label>
                    <div className="d-flex flex-column flex-md-row align-items-start">
                      <div className="flex-grow-1">
                        <Select
                          placeholder="Select Customer Contact"
                          value={selectedContact}
                          onChange={handleSelectContact}
                          options={contactOptions}
                          classNamePrefix="select2-selection"
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPortalTarget={document.body}
                        />
                      </div>
                      <Button
                        color="primary"
                        className="btn btn-primary btn-rounded waves-effect waves-light mt-3 mt-md-0 ms-md-3"
                        onClick={toggleModal}
                      >
                        Add New Contact
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <Label>SITE</Label>
                    <Select
                      placeholder="Select Site"
                      value={selectedSite}
                      onChange={handleSelectSite}
                      options={customerOptions}
                      classNamePrefix="select2-selection"
                      styles={customStyles}
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                    />
                  </div>
                  <div className="mb-3">
                    <Label>DEPARTMENT</Label>
                    <Input
                      type="text"
                      value={department}
                      onChange={handleDepartmentChange}
                      placeholder="Enter department"
                      className="custominput"
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <CustomerModel
        modal={modal}
        toggleModal={toggleModal}
        handleAddContact={handleAddContact}
        customerOptions={customerOptions}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        handleSelectSite={handleSelectSite}
        selectedSite={selectedSite}
        setShowAdditionalPhone={setShowAdditionalPhone}
        showAdditionalPhone={showAdditionalPhone}
      />
    </>
  );
};

export default CustomerModi;
