import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Card, CardBody, CardTitle, Col, Label, Row } from "reactstrap";

const productVersions = [
  { label: "Version 1.0", value: "v1.0" },
  { label: "Version 1.1", value: "v1.1" },
  { label: "Version 1.2", value: "v1.2" },
  { label: "Version 2.0", value: "v2.0" },
  { label: "Version 2.1", value: "v2.1" },
  { label: "Version 2.2", value: "v2.2" },
  { label: "Version 3.0", value: "v3.0" },
  { label: "Version 3.1", value: "v3.1" },
  { label: "Version 4.0", value: "v4.0" },
];

const productData = [
  { value: 1, label: "1 - Laptop" },
  { value: 2, label: "2 - Desktop Computer" },
  { value: 3, label: "3 - Printer" },
  { value: 4, label: "4 - Monitor" },
  { value: 5, label: "5 - Router" },
  { value: 6, label: "6 - External Hard Drive" },
  { value: 7, label: "7 - Graphics Card" },
  { value: 8, label: "8 - RAM Module" },
  { value: 9, label: "9 - CPU Processor" },
  { value: 10, label: "10 - Keyboard" },
];

const inputStyle = {
  backgroundColor: "#f1f5f7",
};

const Product = ({ setProductData ,reset}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    setProductData({
      product: selectedProduct,
      version: selectedVersion,
      info: additionalInfo,
    });
  }, [selectedProduct, selectedVersion, additionalInfo, setProductData]);
useEffect(() => {
  if (reset) {
    setSelectedProduct(null);
    setSelectedVersion(null);
    setAdditionalInfo("");
  }
}, [reset]);

  const handleSelectProduct = (selectedOption) => {
    setSelectedProduct(selectedOption);
  };

  const handleSelectVersion = (selectedOption) => {
    setSelectedVersion(selectedOption);
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
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
      <Row>
        <Col md={12}>
          <CardTitle className="mt-0">Product</CardTitle>
          <Card body>
            <CardBody>
              
                <Row>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label className="">PRODUCT</Label>
                      <Select
                        placeholder="Select Product"
                        value={selectedProduct}
                        onChange={handleSelectProduct}
                        options={productData}
                        classNamePrefix="select2-selection"
                        styles={customStyles}
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                      />
                    </div>
                    <div className="mb-3">
                      <Label className="">PRODUCT VERSION</Label>
                      <Select
                        placeholder="Select Product Version"
                        value={selectedVersion}
                        onChange={handleSelectVersion}
                        options={productVersions}
                        classNamePrefix="select2-selection"
                        styles={customStyles}
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                      />
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label className="form-label">
                        ADDITIONAL PRODUCT INFORMATION
                      </Label>
                      <div>
                        <textarea
                          placeholder="Enter Additional Product Information"
                          required
                          className="form-control custominput"
                          rows="5"
                          value={additionalInfo}
                          onChange={handleAdditionalInfoChange}
                          
                        ></textarea>
                      </div>
                    </div>
                  </Col>
                </Row>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Product;
