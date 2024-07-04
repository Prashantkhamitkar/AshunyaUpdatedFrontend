import React from "react";
import { Card, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPoll,
  faFileSignature,
  faTicketAlt,
  faUserPlus,
  faBan,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const Incidents = () => {
  return (
    <>
      {/* Incidents and Summary container */}
      <Card className="mb-4">
        <CardBody>
          <CardTitle className="mt-0">Incidents</CardTitle>
          <CardText className="text-muted">Summary</CardText>

          {/* Cards container */}
          <Row>
            {/* Card 1 */}
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="2"
              className="mb-4"
              style={{ cursor: "pointer" }}
            >
              <Card
                className="h-100 shadow-sm text-center"
                style={{ backgroundColor: "#FFE2E5" }}
              >
                <CardBody className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <FontAwesomeIcon
                      icon={faPoll}
                      className="text-primary"
                      size="2x"
                    />
                  </div>
                  <h3 className="font-weight-bold">25</h3>
                  <CardText className="text-muted text-center">
                    Unsigned Tickets
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="2"
              className="mb-4 "
              style={{ cursor: "pointer" }}
            >
              <Card
                className="h-100  shadow-sm text-center"
                style={{ backgroundColor: "#d4c4fb" }}
              >
                <CardBody className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      className="text-danger"
                      size="2x"
                    />
                  </div>
                  <h3 className="font-weight-bold">124</h3>
                  <CardText className="text-muted text-center">
                    Overdue Tickets
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="2"
              className="mb-4"
              style={{ cursor: "pointer" }}
            >
              <Card
                className="h-100  shadow-sm text-center"
                style={{ backgroundColor: "#FFF4DE" }}
              >
                <CardBody className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <FontAwesomeIcon
                      icon={faTicketAlt}
                      className="text-warning"
                      size="2x"
                    />
                  </div>
                  <h3 className="font-weight-bold">15</h3>
                  <CardText className="text-muted text-center">
                    My Open Tickets
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Card 4 */}
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="2"
              className="mb-4"
              style={{ cursor: "pointer" }}
            >
              <Card
                className="h-100  shadow-sm text-center"
                style={{ backgroundColor: "#CBF8D2" }}
              >
                <CardBody className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <FontAwesomeIcon
                      icon={faClipboardCheck}
                      className="text-success"
                      size="2x"
                    />
                  </div>
                  <h3 className="font-weight-bold">115</h3>
                  <CardText className="text-muted text-center">
                    All Open Tickets
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Card 5 */}
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="2"
              className="mb-4"
              style={{ cursor: "pointer" }}
            >
              <Card
                className="h-100  shadow-sm text-center"
                style={{ backgroundColor: "#F3E8FF" }}
              >
                <CardBody className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      className="text-info"
                      size="2x"
                    />
                  </div>
                  <h3 className="font-weight-bold">25</h3>
                  <CardText className="text-muted text-center">
                    Customer With Tickets
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Card 6 */}
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="2"
              className="mb-4"
              style={{ cursor: "pointer" }}
            >
              <Card
                className="h-100  shadow-sm text-center"
                style={{ backgroundColor: "#DCFCE7" }}
              >
                <CardBody className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <FontAwesomeIcon
                      icon={faBan}
                      className="text-danger"
                      size="2x"
                    />
                  </div>
                  <h3 className="font-weight-bold">25</h3>
                  <CardText className="text-muted text-center">
                    Closed Tickets
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Incidents;
