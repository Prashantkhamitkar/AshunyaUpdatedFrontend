import React from 'react'
import { Card, CardText, CardTitle, Col, Row } from 'reactstrap';
import PieChart from '../../AllCharts/chartjs/piechart';
import CustomerChart from './CustomerChart';


const Customer_ProductChart = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <Card body>
            <CardTitle className="mt-0 mb-md-5 mb-3">
              Open Tickets By Product
            </CardTitle>
            <PieChart />
          </Card>
        </Col>
        <Col md={6}>
          <Card body>
            <CardTitle className="mt-0 mb-md-5 mb-3">
              Open Projects By Customer
            </CardTitle>
            <CustomerChart />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Customer_ProductChart