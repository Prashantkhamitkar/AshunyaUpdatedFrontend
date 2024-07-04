import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Container } from "reactstrap";
import Customer from "./Customer";
import Product from "./Product";
import Attribute from "./Attribute";
import Ticket from "./Ticket";
import ButtonCustom from "./ButtonCustom";

const Index = () => {
  const [CustomerData, setCustomerData] = useState(null);
  const [ProductData, setProductData] = useState(null);
  const [AttributeData, setAttributeData] = useState(null);
  const [TicketData, setTicketData] = useState(null);
  const [reset, setReset] = useState(false);
useEffect(()=>{
  window.scrollTo(0,0);
},[])

  const handleSubmit = () => {
    console.log("Customer Data:", CustomerData);
    console.log("Product Data:", ProductData);
    console.log("Attribute Data:", AttributeData);
    console.log("Ticket Data:", TicketData);
  };

  const handleCancel = () => {
    setCustomerData(null);
    setProductData(null);
    setAttributeData(null);
    setTicketData(null);
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Ticket" />
          <Customer setCustomerData={setCustomerData} reset={reset} />
          <Product setProductData={setProductData} reset={reset} />
          <Attribute setAttributeData={setAttributeData} reset={reset} />
          <Ticket setTicketData={setTicketData} reset={reset} />
          <ButtonCustom onSubmit={handleSubmit} onCancel={handleCancel} />
        </Container>
      </div>
    </>
  );
};

export default Index;
