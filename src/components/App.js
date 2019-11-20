import React, { Component } from "react";
import logo from "./../logo.svg";

import "./../App.css";
import Datatable from "./DataTable";
import SimpleDataTable from "./SimpleDataTable";

// eslint-disable-next-line no-unused-vars

class App extends Component {
  state = {
    barbers: [
      { id: 1, name: "Billy Boy", place: "Cristo Rey", rating: 4.5 },
      { id: 2, name: "Mangux Solution", place: "Villa Mella", rating: 5.6 },
      { id: 3, name: "Bory", place: "Cristo Rey", rating: 7.0 }
    ]
  };

  removeBarber = barberid => {
    const filterBarber = this.state.barbers.filter((barber, i) => {
      return barberid !== barber.id;
    });
    console.log(filterBarber);
    this.setState({
      barbers: filterBarber
    });
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <img
            src={logo}
            width="300"
            className="text-center"
            height="400"
            alt="fondo-react"
          />
        </div>
        <div className="text-center">
          <div>React App 2019</div>
        </div>
        {/* <div>DataTable:</div>
        <Datatable></Datatable> */}
        <div>Simple DataTable</div>
        <SimpleDataTable
          barbers={this.state.barbers}
          rmbarber={this.removeBarber}
        ></SimpleDataTable>
      </div>
    );
  }
}

export default App;
