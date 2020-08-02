import React from 'react'
import {
    Container,
    Row,
    Col
}
    from 'react-bootstrap'

import styles from './Footer.module.css'
import facebook from '../../icons/facebook.png'
import line from '../../icons/line.png'
import phone from '../../icons/phone.png'
import Aux from '../../hoc/Aux/Aux'

const Footer = props => {

    return (
        <Aux>
            <div className={styles.container}>
                <Container>
                    <Row className="mt-2">
                        <Col lg={6} md={6}>
                            <h3>จริงใจโลงศพ</h3>
                        </Col>
                        {/* Visible only small screen */}
                        <Col lg={6} md={6} className="d-sm-block d-md-none">
                            <p>ที่อยู่ค่ะ</p>
                        </Col>
                        {/* Visible only medium and large screen */}
                        <Col lg={6} md={6} className="d-none d-md-block">
                            <img
                                src={facebook}
                                className={styles.Icon}
                                alt="Facebook Store"
                            />
                            <span>Facebook</span>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        {/* Visible only medium and large screen */}
                        <Col lg={6} md={6} className="d-none d-sm-block">
                            <p>ที่อยู่ค่ะ</p>
                        </Col>
                        <Col lg={6} md={6} className="d-none d-md-block">
                            <img
                                src={line}
                                className={styles.Icon}
                                alt="Line Official ID"
                            />
                            <span>Line Official Account</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} className="d-none d-md-block">
                            <p>ที่อยู่ค่ะ</p>
                        </Col>
                        <Col lg={6} md={6} className="d-none d-md-block">
                            <img
                                src={phone}
                                className={styles.Icon}
                                alt="Phone Number"
                            />
                            <span>00-000-0000</span>
                        </Col>

                        {/* Visible theses Icons group on small screen */}
                        <Col className="d-sm-block d-md-none" sm={12}>
                            <img
                                src={facebook}
                                className={styles.smallIcon}
                                alt="Facebook Store"
                            />
                            <img
                                src={line}
                                className={styles.smallIcon}
                                alt="Line Official Account"
                            />
                            <img
                                src={phone}
                                className={styles.smallIcon}
                                alt="Phone Number"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux >
    )
}

export default Footer