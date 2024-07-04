import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import Incidents from '../Dashboard/Incidents';
import TicketTable from './TicketTable';

const TicketPageIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Tickets" />

          <Incidents/>
          <TicketTable/>
        </Container>
      </div>
    </>
  );
}

export default TicketPageIndex