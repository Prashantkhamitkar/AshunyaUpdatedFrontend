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
import LocationSearchInput from "../common/SearchLocationInput";

const AddCustomerModal = ({ modal, toggleModal }) => {
  const [address, setAddress] = useState("");
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

  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal} size="xl" centered>
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
                    />
                  </Col>
                  <Col lg="6">
                    <Label for="Address" className="mt-3 mt-lg-0">
                      ADDRESS
                    </Label>
                    <LocationSearchInput onSelect={handleAddressSelect} />
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
                      value={city}
                      readOnly
                      required={true}
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
                      value={state}
                      readOnly
                      required={true}
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
                      value={country}
                      readOnly
                      required={true}
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
                      value={zipCode}
                      readOnly
                      required={true}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      for="website"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      WEB SITE
                    </Label>
                    <Input
                      id="website"
                      className="custominput"
                      placeholder="Enter Website"
                    />
                  </Col>
                  <Col lg="6">
                    <Label
                      for="Tags"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      TAGS
                    </Label>
                    <Input
                      id="Tags"
                      className="custominput"
                      placeholder="Enter Tags"
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
                    <Label>CUSTOMER PROFILE</Label>
                    <div>
                      <textarea
                        placeholder="Enter Details"
                        required
                        className="form-control custominput"
                        rows="3"
                      ></textarea>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Add Customer</Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddCustomerModal;
