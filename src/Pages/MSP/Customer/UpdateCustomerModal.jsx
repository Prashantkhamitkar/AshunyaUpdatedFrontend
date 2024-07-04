import React, { useEffect, useState } from "react";
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
import Switch from 'react-switch';
import LocationSearchInput from "../common/SearchLocationInput";
const creditCardOptions = [
  { value: "visa", label: "Visa" },
  { value: "mastercard", label: "MasterCard" },
  { value: "amex", label: "American Express" },
  { value: "discover", label: "Discover" },
];
const UpdateCustomerModal = ({ isOpen, toggle, rowData }) => {
    
  const [selectedCard, setSelectedCard] = useState(null);
  const [switch1, setswitch1] = useState(false);

 const [address, setAddress] = useState(rowData.Address||"");
 const [city, setCity] = useState("");
 const [state, setState] = useState("");
 const [country, setCountry] = useState("");
 const [zipCode, setZipCode] = useState("");
 


 const handleAddressSelect = (address, city, state, country, zipCode) => {
   setAddress(address);
   setCity(city);
   setState(state);
   setCountry(country);
   setZipCode(zipCode);
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

  const handleSelectCard = (selectedOption) => {
    setSelectedCard(selectedOption);
    console.log("Selected card:", selectedOption);
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

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} size="xl" centered>
        <ModalBody>
          <FormGroup>
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      CUSTOMER NAME
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
                      id="customer"
                      className="custominput"
                      placeholder="Enter Customer Name"
                      required={true}
                      value={rowData.Customer}
                    />
                  </Col>
                  <Col lg="6">
                    <Label for="Address" className="mt-3 mt-lg-0">
                      ADDRESS
                    </Label>
                    <LocationSearchInput
                      onSelect={handleAddressSelect}
                      Address={address}
                     
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col lg={3}>
                    <Label
                      for="city"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      CITY
                    </Label>
                    <Input
                      id="city"
                      className="custominput"
                      placeholder="Enter City Name"
                      required={true}
                      value={city}
                    
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="State"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      STATE
                    </Label>
                    <Input
                      id="State"
                      className="custominput"
                      placeholder="Enter State Name"
                      required={true}
                      value={state}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="Country"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      COUNTRY
                    </Label>
                    <Input
                      id="Country"
                      className="custominput"
                      placeholder="Enter Country Name"
                      required={true}
                      value={country}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="ZipCode"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      ZIP CODE
                    </Label>
                    <Input
                      id="ZipCode"
                      className="custominput"
                      placeholder="Enter Zip Code"
                      required={true}
                      value={zipCode}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <Label
                      for="credit"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      CREDIT CARD
                    </Label>
                    <Select
                      placeholder="Select Credit Card"
                      value={selectedCard}
                      onChange={handleSelectCard}
                      options={creditCardOptions}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      styles={customStyles}
                      menuPortalTarget={document.body}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="key"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      ROW KEY
                    </Label>
                    <Input
                      id="key"
                      className="custominput"
                      placeholder="Enter Key"
                      required={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="support"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      SUPPORT KEY
                    </Label>
                    <Input
                      id="support"
                      className="custominput"
                      placeholder="Enter Support Key"
                      required={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="State"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      PARENT CUSTOMER?
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
                    <div className="mt-lg-1 ms-lg-5">
                      <Switch
                        uncheckedIcon={<Offsymbol />}
                        checkedIcon={<OnSymbol />}
                        className=""
                        onColor="#A10344"
                        onChange={() => {
                          setswitch1(!switch1);
                        }}
                        checked={switch1}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      for="domainname"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      EMAIL DOMAIN NAME
                    </Label>
                    <Input
                      id="domainname"
                      className="custominput"
                      placeholder="Enter Website"
                      value={rowData.Website}
                    />
                  </Col>
                  <Col lg="6">
                    <Label
                      for="Tags"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      TAGS
                    </Label>
                    <Input
                      id="Tags"
                      className="custominput"
                      placeholder="Enter Tags"
                      value={rowData.Tags}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <Label
                      for="first"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      FIRST APPROVER
                    </Label>
                    <Select
                      placeholder="Select First Approver"
                      value={selectedCard}
                      onChange={handleSelectCard}
                      options={creditCardOptions}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      styles={customStyles}
                      menuPortalTarget={document.body}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="second"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      SECOND APPROVER
                    </Label>
                    <Select
                      placeholder="Select Second Approver"
                      value={selectedCard}
                      onChange={handleSelectCard}
                      options={creditCardOptions}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      styles={customStyles}
                      menuPortalTarget={document.body}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="third"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      THIRD APPROVER
                    </Label>
                    <Select
                      placeholder="Select Third Approver"
                      value={selectedCard}
                      onChange={handleSelectCard}
                      options={creditCardOptions}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      styles={customStyles}
                      menuPortalTarget={document.body}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="fourth"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      FOURTH APPROVER
                    </Label>
                    <Select
                      placeholder="Select Fourth Approver"
                      value={selectedCard}
                      onChange={handleSelectCard}
                      options={creditCardOptions}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      styles={customStyles}
                      menuPortalTarget={document.body}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <Label
                      for="Phone"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      PHONE
                    </Label>
                    <Input
                      id="Phone"
                      className="custominput"
                      placeholder="Enter Phone"
                      required={true}
                      value={rowData.Phone}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="Stock"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      STOCK SYMBOL
                    </Label>
                    <Input
                      id="Stock"
                      className="custominput"
                      placeholder="Enter Stock Symbol"
                      required={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="Sic"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      SIC
                    </Label>
                    <Input
                      id="Sic"
                      className="custominput"
                      placeholder="Enter Sic"
                      required={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="Duns"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      DUNS
                    </Label>
                    <Input
                      id="Duns"
                      className="custominput"
                      placeholder="Enter Duns"
                      required={true}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col lg="6">
                    <Label>CUSTOMER CONTACT DETAILS</Label>
                    <div className="mb-0">
                      <textarea
                        placeholder="Enter Details"
                        required
                        className="form-control custominput"
                        row="1"
                      ></textarea>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          <Button color="danger" className="mb-2 mb-md-0">
            Delete
          </Button>
          <div className="d-flex flex-column flex-md-row">
            <Button color="primary" className="mb-2 mb-md-0 me-md-3">
              Apply Changes
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UpdateCustomerModal;
