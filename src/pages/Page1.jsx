import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../App.css";
import api from "../utils/api";

const Page1 = (props) => {
  useEffect(() => {
    // getData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div className="dataTable">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Index</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Data</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.rating}</td>
              <td>{item.comment}</td>
              <td>{item.data}</td>
              <td>{item.id}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default Page1;
