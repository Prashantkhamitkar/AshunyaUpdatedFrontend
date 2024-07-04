import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const TicketData = ({ data,setToggle }) => {
  const [selectedRow, setSelectedRow] = useState([]);
  const handleSelectedRow = (row) => {
    const isSelected = selectedRow.includes(row);
    if (isSelected) {
      setSelectedRow(selectedRow.filter((selectdata) => selectdata !== row));
    } else {
      setSelectedRow([...selectedRow, row]);
    }
    
  };
  useEffect(() => {
    setToggle(selectedRow.length > 0);
  }, [selectedRow, setToggle]);



  const columns = [
    {
      cell: (row) => (
        <input
          className="form-check-input"
          type="checkbox"
          name="checkAll"
          checked={selectedRow.includes(row)}
          onChange={() => handleSelectedRow(row)}
        />
      ),
      width: "30px",
    },
    {
      name: <span className="font-weight-bold fs-13">INCIDENT</span>,
      selector: (row) => row.Incident,
      sortable: true,

      cell: (row) => (
        <Link
          className="badge badge-soft-success ms-0 mt-1"
          style={{ color: "#F13259", fontSize: "0.65rem" }}
          to={`/ticketmodification/${row.Incident}`}
        >
          {row.Incident}
        </Link>
      ),
      width: "100px",
    },

    {
      name: <span className="font-weight-bold fs-13">CUSTOMER</span>,
      selector: (row) => row.Customer,
      sortable: true,
      cell: (row) => <Link to="#!">{row.Customer}</Link>,
      width: "150px",
    },
    {
      name: <span className="font-weight-bold fs-13">SITE NAME</span>,
      selector: (row) => row.Site_Name,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">PRODUCT</span>,
      selector: (row) => row.Product,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">STATUS CODE</span>,
      selector: (row) => row.Status,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">SEVERITY</span>,
      selector: (row) => row.Severity,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">SUBJECT</span>,
      selector: (row) => row.Subject,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">ASSIGNEE</span>,
      selector: (row) => row.Assignee,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">CONTACT NAME</span>,
      selector: (row) => row.Contact_Name,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">CONTACT EMAIL</span>,
      selector: (row) => row.Contact_Email,
      sortable: true,
      width: "200px",
    },
    {
      name: <span className="font-weight-bold fs-13">DATE CLOSED</span>,
      selector: (row) => row.Date_Closed,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13 ">PRODUCT VERSION</span>,
      selector: (row) => <span className="ms-3">{row.Product_Version}</span>,
      sortable: true,
      width: "100px",
    },
    {
      name: <span className="font-weight-bold fs-13">STATUS CODE</span>,
      selector: (row) => <span className="ms-3">{row.Status_Code}</span>,
      sortable: true,
      width: "80px",
    },
    {
      name: <span className="font-weight-bold fs-13">STATUS NAME</span>,
      selector: (row) => row.Status_Name,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">CLOSING REMARK</span>,
      selector: (row) => row.Closing_Remark,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">CREATED</span>,
      selector: (row) => row.Created,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">UPDATED</span>,
      selector: (row) => row.Updated,
      sortable: true,
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={7}
      />
    </>
  );
};
export default TicketData;
