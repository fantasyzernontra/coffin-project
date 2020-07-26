import React, { Component } from 'react'
import Aux from '../hoc/Aux/Aux'
import ProductOverviews from '../components/ProductOverviews/ProductOverviews'

class Test extends Component {
    state = {
        passed: '',
        testState: ''
    }

    componentDidMount() {
        // const { passed, testState } = this.props.location.state

        // this.setState({ passed, testState })
    }

    render() {
        // console.log(this.state.passed)

        return (
            <Aux>
                <ProductOverviews/>
            </Aux>
        )
    }
}

export default Test
