import React, { useEffect, useState } from 'react'
import { Tickets } from './Tickets';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import TicketData from './TicketData';
import StickyButton from './StickyButton';

const TicketTable = () => {
  const [ticketData, setTicketData] = useState(Tickets);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle,setToggle]=useState(false);

  useEffect(() => {
    const filtered = Tickets.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setTicketData(filtered);
  }, [searchTerm]);

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">TICKETS DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <StickyButton toggle={toggle} />
                </Col>
              </Row>
              <Row className="g-4">
                <Col className="col-sm">
                  <div
                    className="app-search d-flex mt-0 align-items-center gap-3"
                    style={{ width: "100%" }}
                  >
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span className="ri-search-line"></span>
                    </div>
                  </div>
                </Col>
              </Row>
              <TicketData data={ticketData} setToggle={setToggle} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default TicketTable