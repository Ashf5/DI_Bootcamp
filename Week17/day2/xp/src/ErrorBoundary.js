
import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <div><h3>Something went wrong</h3></div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;