import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
import Select from "react-select";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const CustomerModel = ({
  modal,
  toggleModal,
  handleSelectSite,
  selectedSite,
  handleAddContact,
  customerOptions,
  selectedCustomer, // Add this prop
  setSelectedCustomer,
  showAdditionalPhone,
  setShowAdditionalPhone,
  // Add this prop
}) => {
  const [switch1, setswitch1] = useState(false);
  const [switch2, setswitch2] = useState(false);
  const [switch3, setswitch3] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [additionalPhoneNumber, setAdditionalPhoneNumber] = useState("");
  const handleSelectCustomer = (selectedOption) => {
    setSelectedCustomer(selectedOption);
  };
  const handleAddPhoneNumber = () => {
    setShowAdditionalPhone(true);
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
  const Offsymbol = () => {
    document.title = "Form Advanced | Upzet - React Admin & Dashboard Template";
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2,
        }}
      >
        {" "}
        No
      </div>
    );
  };

  const OnSymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2,
        }}
      >
        {" "}
        Yes
      </div>
    );
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal} size="lg" centered>
        <ModalBody>
          <FormGroup>
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      CUSTOMER
                      <i
                        className="fas fa-asterisk"
                        style={{
                          color: "red",
                          fontSize: "0.5em",
                          position: "absolute",
                          top: "0.5em",
                          right: "-1.5em",
                        }}
                      ></i>
                    </Label>
                    <Select
                      placeholder="Select Customer"
                      value={selectedCustomer}
                      onChange={handleSelectCustomer}
                      options={customerOptions}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      styles={customStyles}
                    />
                  </Col>
                  <Col lg="6">
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
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      for="firstName"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      FIRST NAME
                      <i
                        className="fas fa-asterisk"
                        style={{
                          color: "red",
                          fontSize: "0.5em",
                          position: "absolute",
                          top: "0.5em",
                          right: "-1.5em",
                        }}
                      ></i>
                    </Label>
                    <Input
                      id="firstName"
                      className="custominput"
                      placeholder="Enter first name"
                      required={true}
                    />
                  </Col>
                  <Col lg="6">
                    <Label
                      for="lastName"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      LAST NAME
                      <i
                        className="fas fa-asterisk"
                        style={{
                          color: "red",
                          fontSize: "0.5em",
                          position: "absolute",
                          top: "0.5em",
                          right: "-1.5em",
                        }}
                      ></i>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="custominput"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      for="phoneNumber"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      PHONE NUMBER
                      <i
                        className="fas fa-asterisk"
                        style={{
                          color: "red",
                          fontSize: "0.5em",
                          position: "absolute",
                          top: "0.5em",
                          right: "-1.5em",
                        }}
                      ></i>
                    </Label>

                    <Input
                      id="phoneNumber"
                      className="custominput"
                      placeholder="Enter phone number"
                    />
                    {showAdditionalPhone && (
                      <div className="mt-3">
                        <Label for="additionalPhoneNumber">
                          ALTERNATE PHONE NUMBER
                        </Label>
                        <Input
                          id="additionalPhoneNumber"
                          className="custominput"
                          placeholder="Enter additional phone number"
                          value={additionalPhoneNumber}
                          onChange={(e) =>
                            setAdditionalPhoneNumber(e.target.value)
                          }
                        />
                      </div>
                    )}
                    {!showAdditionalPhone && (
                      <div
                        style={{
                          cursor: "pointer",
                          marginTop: "1em",
                        }}
                        onClick={handleAddPhoneNumber}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                        <Label className="ms-2" style={{ cursor: "pointer" }}>
                          ADD PHONE NUMBER
                        </Label>
                      </div>
                    )}
                  </Col>
                  <Col lg="6">
                    <Label
                      for="email"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      EMAIL
                      <i
                        className="fas fa-asterisk"
                        style={{
                          color: "red",
                          fontSize: "0.5em",
                          position: "absolute",
                          top: "0.5em",
                          right: "-1.5em",
                        }}
                      ></i>
                    </Label>
                    <Input
                      id="email"
                      className="custominput"
                      placeholder="Enter email"
                    />
                  </Col>
                </Row>

                <Row className="mt-5" style={{ textAlign: "center" }}>
                  <Col md={4} lg={3}>
                    <Label>IS ACTIVE</Label>
                    <div>
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        className="me-1 mb-sm-8 mb-2"
                        onColor="#626ed4"
                        onChange={() => {
                          setswitch1(!switch1);
                        }}
                        checked={switch1}
                      />
                    </div>
                  </Col>
                  <Col md={4} lg={3}>
                    <Label>PRIMARY CONTACT</Label>
                    <div>
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        className="me-1 mb-sm-8 mb-2"
                        onColor="#626ed4"
                        onChange={() => {
                          setswitch2(!switch2);
                        }}
                        checked={switch2}
                      />
                    </div>
                  </Col>
                  <Col md={4} lg={3}>
                    <Label>ADMIN</Label>
                    <div>
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        className="me-1 mb-sm-8 mb-2"
                        onColor="#626ed4"
                        onChange={() => {
                          setswitch3(!switch3);
                        }}
                        checked={switch3}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddContact}>
            Add Contact
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CustomerModel;
