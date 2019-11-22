import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';

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
                } > Agregar < /Button>
        } else {

                    button = < Button color='warning'
                        onClick={
                            this.toggleModal
                        }
                        style={
                            {
                                minWidth: '90px'
                            }
                        } > Editar < /Button>
                    }
        return <Fragment > {
                            button
                        } <
            Modal isOpen={
                                this.state.isOpen
                            }
                            toggle={
                                this.toggleModal
                            } > < /Modal> < /
            Fragment >
                                            }
                                        
}