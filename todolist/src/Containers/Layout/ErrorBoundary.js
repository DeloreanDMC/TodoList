import React from 'react';
import { connect } from 'react-redux';

import { getGlobalError } from '../../Redux/Selectors/Selectors';
import ErrorPage from '../../Views/Pages/PageNotFound/ErrorPage';
import Button from '../../Views/Components/Button/Button';
import { globalError } from '../../Redux/ActionCreators/ActionCreators';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError:false};
        this.hideError = props.hideError;
    }

    showError(message) {
        const boxStyle = {
            display:"flex",
            justifyContent:"center",
            textAlign:"center"
        };
        return (
            <>
                <div style={{backgroundColor:"#000"}}>
                    <ErrorPage title={message}/>
                </div>
                <div style={boxStyle}>
                    <Button 
                        onClick={()=>this.hideError()}
                        title="Home Page" 
                        navTo="/homepage"/>
                </div>
            </>
        );
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true});
    }
    
    render() {
    
    if (this.state.hasError) {
        return this.showError("Something went wrong.");
    } 

    if (this.props.error) {
        return this.showError(this.props.error);
    }
    
    return this.props.children; 
    }
};

const mapStateToProps = state => ({
    error:getGlobalError(state)
});

const masDispatchToProps = dispatch => ({
    hideError:()=>dispatch(globalError(null))
});
export default connect(mapStateToProps,masDispatchToProps)(ErrorBoundary);