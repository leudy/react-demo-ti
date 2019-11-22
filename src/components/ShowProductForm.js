import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ProductForm from './ProductForm'

class ShowProductForm extends Component {
    state = {
        isOpen = false
    }
    toggleModal = () => {
        this.state(previusState => ({
            IsOpen: !previusState.IsOpen
        }))
    }



    render() {
        let button = '';
        let title = 'Editar datos del producto';
        if (this.props.isNew) {
            title = 'Agregar un nuevo producto';
            button = <Button color='success'
                onClick={
                    this.toggleModal
                }
                style={
                    {
                        minWidth: '90px'
                    }
                } > Agregar </Button>
        } else {

            button = <Button color='warning'
                onClick={this.toggleModal}
                style={{ minWidth: '90px' }}>Editar </Button>
        }
        return <Fragment>{button} <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody> <ProductForm
                addProduct={this.props.addProduct}
                updateProduct={this.props.updateProduct}
                toggle={this.toggleModal}
                product={this.props.product}            ></ProductForm> </ModalBody>
        </Modal>
        </Fragment >
    }
}

export default ShowProductForm