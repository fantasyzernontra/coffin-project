import React, { Component } from 'react'
import {
    Carousel
}
    from 'react-bootstrap'

import styles from './Home.module.css'
import Aux from '../../hoc/Aux/Aux'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        passed: ''
    }

    testPropsHandler(event) {
        const temp = event.target.value
        this.setState({passed: temp})
    }

    render() {
        return (
            <Aux>
                <div className={styles.container}>
                    <Carousel pause="hover" wrap>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                alt="First slide"
                                height="600"
                            />
                            <Carousel.Caption>
                                <h3>ยินดีต้อนรับสู่ จริงใจโลงศพ</h3>
                                <p>บริการซื้อขายและออกแบบโลงศพ</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                alt="Second Slide"
                                height="600"
                            />
                            <Carousel.Caption>
                                <h3>ยินดีต้อนรับสู่ จริงใจโลงศพ</h3>
                                <p>บริการซื้อขายและออกแบบโลงศพ</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                                alt="Third slide"
                                height="600"
                            />

                            <Carousel.Caption>
                                <h3>ยินดีต้อนรับสู่ จริงใจโลงศพ</h3>
                                <p>บริการซื้อขายและออกแบบโลงศพ</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <input onChange={(event) => this.testPropsHandler(event)}/>
                {this.state.passed}
                <Link to={{
                    pathname:'/standard',
                    state: {passed: this.state.passed}
                }}>Test Props</Link>
            </Aux >
        )
    }
}

export default Home