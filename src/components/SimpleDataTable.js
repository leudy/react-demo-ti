import React, { Component } from "react";
import { Table } from "reactstrap";

// const TableBody = () => {
//   return (
//     <tbody>
//       <tr>
//         <td> BillyBoy </td> <td> Cristo Rey </td> <td> 5.9</td>{" "}
//       </tr>{" "}
//       <tr>
//         <td> BillyBoy 2 </td> <td> Cristo Rey </td> <td> 2.0</td>{" "}
//       </tr>{" "}
//     </tbody>
//   );
// };

const TableBody = data => {
  const tablerows = data.barbers.map((p, i) => {
    return (
      <tr key={p.id}>
        <th>{p.id}</th> <td> {p.name}</td> <td> {p.place} </td>{" "}
        <td>{p.rating}</td>
        <td>
          <button
            onClick={() => data.removeBarber(p.id)}
            className="btn btn-primary"
          >
            {" "}
            Eliminar
          </button>{" "}
        </td>
      </tr>
    );
  });

  return <tbody>{tablerows}</tbody>;
};

const TheadTable = () => {
  return (
    <thead className="thead-dark">
      {" "}
      <tr>
        {" "}
        <th>ID</th> <th> Nombre </th> <th>Lugar</th> <th> Rating </th>{" "}
        <th>Opción</th>{" "}
      </tr>{" "}
    </thead>
  );
};

class SimpleDataTable extends Component {
  render() {
    return (
      <Table striped>
        <TheadTable />
        <TableBody
          barbers={this.props.barbers}
          removeBarber={this.props.rmbarber}
        />
      </Table>
    );
  }
}

export default SimpleDataTable;
