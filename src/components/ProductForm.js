import React, { Component } from 'react';
//   importaciones para trabajar con los formularios son
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
class ProductForm extends Component {
  state = {
    id: 0,
    name: '',
    unitPrice: 0,
    unitsInStock: 0
  };
  componentDidMount() {
    if (this.props.product) {
      this.setState({
        id: this.props.product.id,
        name: this.props.product.name,
        unitPrice: this.props.product.unitPrice,
        unitsInStock: this.props.product.unitsInStock
      });
    }
  }

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  OnSubmitNew = e => {
    e.preventDefault();
    this.props.addProduct(this.state);
  };

  onSubmitUpdate = e => {
    e.preventDefault();
    this.props.updateProduct(this.state);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <label for="id">ID</label>
          <input
            type="number"
            name="id"
            onChange={this.OnChange}
            value={this.state.id}
          ></input>
        </FormGroup>
        <FormGroup>
          <label for="name">Nombre</label>
          <input
            type="text"
            name="name"
            onChange={this.OnChange}
            value={this.state.name}
          ></input>
        </FormGroup>
      </Form>
    );
  }
}

export default ProductForm;
