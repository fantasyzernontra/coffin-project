import React, { useState } from 'react'

import {
    Modal,
    ModalBody,
    Carousel,
    Button,
    Spinner
}
    from 'react-bootstrap'

import Aux from '../../hoc/Aux/Aux'

const Modals = props => {

    const [ButtonLoading, setButtonLoading] = useState('  ')

    return (
        <Aux>
            <Modal
                size="lg"
                show={props.show}
                onHide={props.onHide}
                dialogClassName="modal-dialog-scrollable"
                centered
            >
                <Modal.Header closeButton>
                    {props.name}
                </Modal.Header>
                <ModalBody>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                alt="First slide"
                                height="300"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                alt="Second slide"
                                height="300"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                alt="Third slide"
                                height="300"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <br />
                    ความหมาย<br />
                    {props.description}<br />

                    <br />
                    วัสดุที่ใช้<br />
                    {props.materials}<br />

                    <br />
                    ราคา<br />
                    {props.price}<br />

                    <div className="text-lg-right text-center">
                        <Button variant="outline-secondary"  onClick={props.onHide} style={{marginRight: '10px'}}>กลับหน้าเลือกสินค้า</Button>
                        <Button variant="outline-success"  onClick={() => setButtonLoading(<Spinner size="sm" animation="border"/>)}>{ButtonLoading} เลือกซื้อสินค้า</Button>
                    </div>
                </ModalBody>
            </Modal>
        </Aux>
    )
}

export default Modals