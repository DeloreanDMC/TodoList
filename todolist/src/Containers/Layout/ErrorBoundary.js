import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        
        console.log("ErrorBoundary:");
        console.log(props);
        console.log(props.error);
        this.state = {hasError:false};
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        
    }
    
    render() {
    if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
    }
    if (this.props.error) {

        return <Redirect to="/users"/>
    }
    return this.props.children; 
    }
};

const mapStateToProps = state => ({
    error:state.app.error
});
export default connect(mapStateToProps)(ErrorBoundary);