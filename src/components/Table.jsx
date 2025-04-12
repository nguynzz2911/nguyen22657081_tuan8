import React, { useEffect, useState } from "react";
import "../css/Table.css";  
import createIcon from "../img/create.png";


const ITEMS_PER_PAGE = 6;

const CustomerTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/customers")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("API error", err));
  }, []);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentItems.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const renderStatus = (status) => {
    const statusClass = {
      "New": "status new",
      "In progress": "status in-progress",
      "Completed": "status completed"
    }[status] || "status";

    return <span className={statusClass}>{status}</span>;
  };

  const renderPagination = () => {
    const pages = [];
    const maxPageToShow = 5;

    if (totalPages <= maxPageToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return (
      <div className="pagination">
        <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>&lt;</button>
        {pages.map((page, idx) =>
          page === "..." ? (
            <span key={idx} className="dots">...</span>
          ) : (
            <button
              key={idx}
              className={page === currentPage ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          )
        )}
        <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>&gt;</button>
      </div>
    );
  };

  return (
    <div className="customer-table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th><input type="checkbox" checked={selectAll} onChange={toggleSelectAll} /></th>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td><input type="checkbox" checked={selectedRows.includes(item.id)} onChange={() => toggleRow(item.id)} /></td>
              <td>
                <div className="name-cell">
                  <img src={item.avatar} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              </td>
              <td>{item.company}</td>
              <td>${item.orderValue}</td>
              <td>{item.orderDate}</td>
              <td>{renderStatus(item.status)}</td>
              <td><img src={createIcon} alt="edit" className="edit-icon" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <span>{data.length} results</span>
        {renderPagination()}
      </div>
      
    </div>
  );
};

export default CustomerTable;
