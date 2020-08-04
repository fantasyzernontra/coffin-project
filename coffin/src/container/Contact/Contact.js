import React from 'react'

import {
    Container,
    Col,
    Row
}
    from 'react-bootstrap'
import Aux from '../../hoc/Aux/Aux'

import styles from './Contact.module.css'
import Facebook from '../../icons/facebook.png'
import Line from '../../icons/line.png'
import Phone from '../../icons/phone.png'

const Contact = props => {
    return (
        <Aux>
            <Container style={{ padding: '10px', marginTop: '20px' }}>
                <Row>
                    <Col lg={6} md={12}>
                        <h1>จริงใจโลงศพ</h1>
                    </Col>
                    <Col lg={6} className="text-left d-none d-lg-block">
                        999 หมู่ 9  ตำบล ก้าวเดียว  อำเภอ ถึงตาย  จังหวัด หยังเขียด
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg={6} md={12}>
                        <img
                            height="200"
                            alt='Store'
                            src='https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
                        />
                    </Col>
                    <Col lg={6} md={12} className="text-lg-left">
                        รับออกแบบโลงศพแบบมาตรฐาน - โมเดิร์น<br/>
                        และรับทำโลงศพตามต้องการทั้งลวดลาย, ความหมาย, วัสดุ <br/>และมีบริการรับส่งโลงถึงที่
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: '20px'}}>
                <Row>
                    <Col>
                        <img
                            src={Facebook}
                            alt='Facebook Icon'
                            className={styles.Icons}
                        />
                        <span>Facebook Official</span>
                    </Col>
                    <Col>
                        <Col>
                            <img
                                src={Line}
                                alt='Line Icon'
                                className={styles.Icons}
                            />
                            <span>Line Official</span>
                        </Col>
                    </Col>
                    <Col>
                        <img
                            src={Phone}
                            alt='Phone Icon'
                            className={styles.Icons}
                        />
                        <span>00-000-0000</span>
                    </Col>
                </Row>
            </Container>
        </Aux>
    )
}

export default Contact