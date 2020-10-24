import React, {Component} from 'react'


class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCath = (error, info) => {
        this.setState({hasError: true, errorMessage: error})
    }


    render() {
        console.log("rrrrrrrrr" + this.state.hasError + "hhhhhhhhhhh")
        if (this.state.hasError) {
            return (<div>
                    <h1>{this.state.errorMessage}</h1>
                </div>
            )
        } else {
            return this.props.children
        }

    }
}

export default ErrorBoundary;