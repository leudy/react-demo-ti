import React, { Component } from 'react';
// eslint-disable-next-line
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

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	OnSubmitNew = (e) => {
		e.preventDefault();
        this.props.addProduct(this.state);
        this.props.toggle();
	};

	onSubmitUpdate = (e) => {
		e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.toggle();
	};

	render() {
		return (
			<Form onSubmit={this.props.product ? this.onSubmitUpdate : this.OnSubmitNew}>
				<FormGroup>
					<Label for="id"> ID </Label>
					<Input type="text" name="id" onChange={this.OnChange} value={this.state.id} />
				</FormGroup>{' '}
				{/* <FormGroup>
          <Label for="name"> Nombre: </Label>{' '}
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.OnChange}
          ></Input>{' '}
        </FormGroup>{' '} */}
				<Button> {this.props.product ? 'Guardar' : 'Crear'} </Button>{' '}
			</Form>
		);
	}
}

export default ProductForm;
