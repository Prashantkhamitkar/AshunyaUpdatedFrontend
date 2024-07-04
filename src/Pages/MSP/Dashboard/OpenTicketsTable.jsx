import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const data = [
  {
    id: "#VZ2101",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 150,
    closed_tickets: 123,
    lastActivity: "Updated INC46601 35 minutes ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 300,
    closed_tickets: 250,
    lastActivity: "Updated INC46602 2 hours ago",
  },
  {
    id: "#VZ2103",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 75,
    closed_tickets: 98,
    lastActivity: "Updated INC46603 35 minutes ago",
  },
  {
    id: "#VZ2104",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 467,
    closed_tickets: 350,
    lastActivity: "Updated INC46604 2 hours ago",
  },
  {
    id: "#VZ2105",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 299,
    closed_tickets: 275,
    lastActivity: "Updated INC46605 35 minutes ago",
  },
  {
    id: "#VZ2106",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 120,
    closed_tickets: 110,
    lastActivity: "Updated INC46606 2 hours ago",
  },
  {
    id: "#VZ2107",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 500,
    closed_tickets: 485,
    lastActivity: "Updated INC46607 35 minutes ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 1000,
    closed_tickets: 950,
    lastActivity: "Updated INC46608 2 hours ago",
  },
  {
    id: "#VZ2101",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 888,
    closed_tickets: 850,
    lastActivity: "Updated INC46609 35 minutes ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 450,
    closed_tickets: 400,
    lastActivity: "Updated INC46610 2 hours ago",
  },
  {
    id: "#VZ2101",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 60,
    closed_tickets: 55,
    lastActivity: "Updated INC46611 35 minutes ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 910,
    closed_tickets: 875,
    lastActivity: "Updated INC46612 2 hours ago",
  },
  {
    id: "#VZ2101",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 333,
    closed_tickets: 320,
    lastActivity: "Updated INC46613 35 minutes ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 780,
    closed_tickets: 700,
    lastActivity: "",
  },
  {
    id: "#VZ2101",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 412,
    closed_tickets: 390,
    lastActivity: "Updated INC46616 35 minutes ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 625,
    closed_tickets: 600,
    lastActivity: "Updated INC46621 2 hours ago",
  },
  {
    id: "#VZ2101",
    customer_name: "Mary Cousar",
    email: "marycousar@velzon.com",
    open_tickets: 200,
    closed_tickets: 190,
    lastActivity: "Updated INC46634 35 minutes ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Jeff Taylor",
    email: "jefftaylor@velzon.com",
    open_tickets: 875,
    closed_tickets: 850,
    lastActivity: "Updated INC46605 2 hours ago",
  },
  {
    id: "#VZ2102",
    customer_name: "Henna Bhatia",
    email: "henna@gmail.com",
    open_tickets: 875,
    closed_tickets: 850,
    lastActivity: "Updated INC46605 2 hours ago",
  },
  {
    id: "#VZ2114",
    customer_name: "Prashant Khamitkar",
    email: "prashant@gmail.com",
    open_tickets: 459,
    closed_tickets: 850,
    lastActivity: "Updated INC46615 2 hours ago",
  },
];

const OpenTicketsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const recordsPerPage = 7;

  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when search term changes
  }, [searchTerm]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderLastActivity = (lastActivity) => {
    const ticketNumberMatch = lastActivity.match(/(INC\d+)/);
    if (ticketNumberMatch) {
      const [ticketNumber] = ticketNumberMatch;
      const parts = lastActivity.split(ticketNumber);
      return (
        <>
          {parts[0]}
          <Link
            to={`/ticketmodification/${ticketNumber}`}
            className="badge badge-soft-success"
            style={{ color: "#F13259", fontSize: "1em" }}
          >
            {ticketNumber}
          </Link>
          {parts[1]}
        </>
      );
    }
    return lastActivity;
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h4 className="card-title mb-0">Open Tickets By Technicians</h4>
            </CardHeader>

            <CardBody>
              <div id="customerList">
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

                <div className="table-responsive table-card mb-1">
                  <table
                    className="table align-middle table-nowrap"
                    id="customerTable"
                  >
                    <thead className="table-light">
                      <tr>
                        <th className="sort" data-sort="customer_name">
                          User Name
                        </th>
                        <th className="sort" data-sort="email">
                          Assigned
                        </th>
                        <th className="sort" data-sort="phone">
                          Open Tickets
                        </th>
                        <th className="sort" data-sort="date">
                          Closed Tickets
                        </th>
                        <th className="sort" data-sort="lastActivity">
                          Last Ticket Activity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      {currentRecords.map((item, index) => (
                        <tr key={index}>
                          <td className="customer_name">
                            {item.customer_name}
                          </td>
                          <td className="email">{item.email}</td>
                          <td className="number">
                            <Link style={{ marginLeft: "2rem" }}>
                              {item.open_tickets}
                            </Link>
                          </td>
                          <td className="number">
                            <Link style={{ marginLeft: "2rem" }}>
                              {item.closed_tickets}
                            </Link>
                          </td>
                          <td className="lastActivity">
                            {renderLastActivity(item.lastActivity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-end">
                  <div className="pagination-wrap hstack gap-2">
                    <Button
                      className="btn btn-primary btn-rounded waves-effect waves-light"
                      disabled={currentPage === 1}
                      onClick={() => handleClick(currentPage - 1)}
                      style={{
                        backgroundColor: "#0AF283",
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      Previous
                    </Button>

                    <Button
                      className="btn btn-primary btn-rounded waves-effect waves-light"
                      disabled={currentPage === totalPages}
                      onClick={() => handleClick(currentPage + 1)}
                      style={{
                        backgroundColor: "#0AF283",
                        outline: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OpenTicketsTable;
