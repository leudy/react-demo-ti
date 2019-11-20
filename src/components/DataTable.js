import React, { Component } from "react";
import { Table } from "reactstrap";

class DataTable extends Component {
  render() {
    return (
      <Table striped>
        <thead className="thead-dark">
          {" "}
          <tr>
            <th>Name </th>
            <th> Lugar </th>
            <th> Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {" "}
            <td>Billy BarberShop </td> <td> Cristo Rey </td> <td> 5 </td>{" "}
          </tr>
          <tr>
            {" "}
            <td> Marking Palace </td> <td>Arroyo Hondo </td> <td> 9 </td>{" "}
          </tr>
          <tr>
            {" "}
            <td> Marking Palace </td> <td>Arroyo Hondo </td> <td>4 </td>{" "}
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default DataTable;
