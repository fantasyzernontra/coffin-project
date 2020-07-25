import React, { Component } from 'react'
import Aux from '../hoc/Aux/Aux'

class Test extends Component {
    state = {
        passed: '',
        testState: ''
    }

    componentDidMount() {
        const { passed, testState } = this.props.location.state

        this.setState({ passed, testState })
    }

    render() {
        // console.log(this.state.passed)

        return (
            <Aux>
                From Test Page.
                {this.state.passed}
                {this.state.testState}
            </Aux>
        )
    }
}

export default Test
