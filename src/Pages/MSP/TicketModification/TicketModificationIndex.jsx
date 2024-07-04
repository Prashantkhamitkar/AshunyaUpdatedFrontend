import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import { useParams } from 'react-router-dom'
import TicketModi from './TicketModi'
import AttributeModi from './AttributeModi'
import CustomerModi from './CustomerModi'
import ProductModi from './ProductModi'
import ApplyChanges from './ApplyChanges'

const TicketModificationIndex = () => {
    const {ticketnumber}=useParams("ticketnumber");
    const [CustomerData, setCustomerData] = useState(null);
    const [ProductData, setProductData] = useState(null);
    const [AttributeData, setAttributeData] = useState(null);
    const [TicketData, setTicketData] = useState(null);
    const [reset, setReset] = useState(false);

useEffect(() => {
  window.scrollTo(0, 0);

}, []);


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
          <Breadcrumbs title="MSP" breadcrumbItem="Edit Ticket" />
          <TicketModi
            ticketnumber={ticketnumber}
            setTicketData={setTicketData}
            reset={reset}
          />
          <AttributeModi
            setAttributeData={setAttributeData}
            reset={reset}
            AttributeData={AttributeData}
          />
          <CustomerModi setCustomerData={setCustomerData} reset={reset} CustomerData={CustomerData}/>
          <ProductModi setProductData={setProductData} reset={reset} ProductData={ProductData}/>
          <ApplyChanges onCancel={handleCancel} onSubmit={handleSubmit}/>
        </Container>
      </div>
    </>
  );
}

export default TicketModificationIndex