import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import AddCustomer from "./AddCustomer";
import CustomerTable from "./CustomerTable";




const CustomerIndex = () => {
    
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Customers" />
          <AddCustomer/>
          <CustomerTable />
         
        </Container>
      </div>
    </>
  );
};

export default CustomerIndex;
