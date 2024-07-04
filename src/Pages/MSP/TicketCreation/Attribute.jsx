import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Card, CardBody, CardTitle, Col, Label, Row } from "reactstrap";

const categoryData = [
  { label: "Email Issue", value: "Email Issue" },
  { label: "Network Issue", value: "Network Issue" },
  { label: "Login Issue", value: "Login Issue" },
  { label: "Software Installation", value: "Software Installation" },
  { label: "Hardware Issue", value: "Hardware Issue" },
];


const assignedToData = [
  { label: "John Doe", value: "john_doe" },
  { label: "Jane Smith", value: "jane_smith" },
  { label: "Mike Johnson", value: "mike_johnson" },
  { label: "Emily Brown", value: "emily_brown" },
];
const statusData = [
  { value: 10, label: "10 - Open" },
  { value: 20, label: "20 - Pending Additional Information" },
  { value: 30, label: "30 - Work in Progress" },
  { value: 35, label: "35 - Waiting for User Response" },
  { value: 40, label: "40 - Resolution Communicated to Customer" },
  { value: 80, label: "80 - Closed and Resolved" },
  { value: 81, label: "81 - Closed with Confirmation" },
  { value: 82, label: "82 - Closed without Confirmation" },
  { value: 83, label: "83 - Closed without Resolution" },
  { value: 84, label: "84 - Closed Other Reason" },
];

const severityData = [
  { label: "Low", value: "Low" },
  { label: "Medium", value: "Medium" },
  { label: "High", value: "High" },
];

const urgencyData = [
  { label: "Low", value: "Low" },
  { label: "Medium", value: "Medium" },
  { label: "High", value: "High" },
];

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

const Attribute = ({ setAttributeData, reset }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAssignedTo, setSelectedAssignedTo] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(statusData[0]); // Default to the first status option
  const [selectedSeverity, setSelectedSeverity] = useState(null);
  const [selectedUrgency, setSelectedUrgency] = useState(null);

  // Reset state when the reset prop changes
  useEffect(() => {
    setSelectedCategory(null);
    setSelectedAssignedTo(null);
    setSelectedStatus(statusData[0]);
    setSelectedSeverity(null);
    setSelectedUrgency(null);
    setAttributeData({
      category: null,
      assignedTo: null,
      status: statusData[0],
      severity: null,
      urgency: null,
    });
  }, [reset, setAttributeData]);

  const handleSelectCategory = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setAttributeData((prevData) => ({
      ...prevData,
      category: selectedOption,
    }));
  };

  const handleSelectAssignedTo = (selectedOption) => {
    setSelectedAssignedTo(selectedOption);
    setAttributeData((prevData) => ({
      ...prevData,
      assignedTo: selectedOption,
    }));
  };

  const handleSelectStatus = (selectedOption) => {
    setSelectedStatus(selectedOption);
    setAttributeData((prevData) => ({
      ...prevData,
      status: selectedOption,
    }));
  };

  const handleSelectSeverity = (selectedOption) => {
    setSelectedSeverity(selectedOption);
    setAttributeData((prevData) => ({
      ...prevData,
      severity: selectedOption,
    }));
  };

  const handleSelectUrgency = (selectedOption) => {
    setSelectedUrgency(selectedOption);
    setAttributeData((prevData) => ({
      ...prevData,
      urgency: selectedOption,
    }));
  };

  return (
    <Row>
      <Col md={12}>
        <CardTitle className="mt-0">Attribute</CardTitle>
        <Card body>
          <CardBody>
           
              <Row>
                <Col lg="6">
                  <div className="mb-3">
                    <Label>CATEGORY</Label>
                    <Select
                      placeholder="Select Category"
                      value={selectedCategory}
                      onChange={handleSelectCategory}
                      options={categoryData}
                      classNamePrefix="select2-selection"
                      styles={customStyles}
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                    />
                  </div>
                  <div className="mb-3">
                    <Label>ASSIGNED TO</Label>
                    <Select
                      placeholder="Select Assigned To"
                      value={selectedAssignedTo}
                      onChange={handleSelectAssignedTo}
                      options={assignedToData}
                      classNamePrefix="select2-selection"
                      styles={customStyles}
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <Label>STATUS</Label>
                    <Select
                      placeholder="Select Status"
                      value={selectedStatus}
                      onChange={handleSelectStatus}
                      options={statusData}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      styles={customStyles}
                    />
                  </div>
                  <Row>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>SEVERITY</Label>
                        <Select
                          placeholder="Select Severity"
                          value={selectedSeverity}
                          onChange={handleSelectSeverity}
                          options={severityData}
                          classNamePrefix="select2-selection"
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPortalTarget={document.body}
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>URGENCY</Label>
                        <Select
                          placeholder="Select Urgency"
                          value={selectedUrgency}
                          onChange={handleSelectUrgency}
                          options={urgencyData}
                          classNamePrefix="select2-selection"
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPortalTarget={document.body}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Attribute;
