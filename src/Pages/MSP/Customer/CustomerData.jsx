import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import UpdateCustomerModal from "./UpdateCustomerModal";


const CustomerData = ({data}) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedRow, setSelectedRow] = useState(null);

const toggleModal = () => {setIsModalOpen(!isModalOpen)
  setSelectedRow(null);
};

const handleEdit = (row) => {
  setSelectedRow(row);
  setIsModalOpen(true);
};


// const handleView=(row)=>{
//   console.log(row);
// }
  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,

      cell: (row) => {
        return (
          <button className="btn btn-soft-secondary p-0 ms-2" onClick={()=>handleEdit(row)}>
            <span className="badge badge-soft-success p-0">
              <i className="fas fa-edit" ></i>
            </span>
          </button>
        );
      },
    },

    {
      name: <span className="font-weight-bold fs-13">CUSTOMER</span>,
      selector: (row) => row.Customer,
      sortable: true,
      cell: (row) => <Link to="#!">{row.Customer}</Link>,
    },
    {
      name: <span className="font-weight-bold fs-13">ADDRESS</span>,
      selector: (row) => row.Address,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">WEBSITE</span>,
      selector: (row) => row.Website,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">PHONE</span>,
      selector: (row) => row.Phone,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">CUSTOMER CONTACT</span>,
      selector: (row) => row.Customer_Contact,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">OPEN TICKETS</span>,
      selector: (row) => row.Open,
      sortable: true,
      cell: (row) => (
        <Link to="#!" className="ms-3">
          {row.Open}
        </Link>
      ),
    },
    {
      name: <span className="font-weight-bold fs-13">CLOSED LAST 7 DAYS</span>,
      selector: (row) => row.Closed_seven,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">TICKETS</span>,
      selector: (row) => row.Tickets,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">CONTACTS</span>,
      selector: (row) => row.Contact,
      sortable: true,
      cell: (row) => (
        <Link to="#!" className="ms-3">
          {row.Contact}
        </Link>
      ),
    },
    {
      name: <span className="font-weight-bold fs-13">TAGS</span>,
      selector: (row) => row.Tags,
      sortable: true,
    },
  ];

  
  return (
    <>
      <DataTable columns={columns} data={data} pagination />
      {selectedRow && (
        <UpdateCustomerModal
          isOpen={isModalOpen}
          toggle={toggleModal}
          rowData={selectedRow}
        />
      )}
    </>
  );
};
export default CustomerData;