import React from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Container } from "reactstrap";
import Incidents from "./Incidents";

import OpenTicketsTable from "./OpenTicketsTable";
import DashBoardChart from "./DashboardChart";
import Customer_ProductChart from "./Customer_ProductChart";

const DashboardIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Dashboard" />
          <Incidents />
          <DashBoardChart />
          <Customer_ProductChart/>
          <OpenTicketsTable />
        </Container>
      </div>
    </>
  );
};

export default DashboardIndex;
