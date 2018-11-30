import React, {Component} from 'react';
import propTypes from 'prop-types';
import ApiFetcher from "../ApiFetcher";

export default (WrappedComponent) => {
    class RxComponent extends Component {
        currentRequest = null;
        state = {
            data: null
        };

        componentWillReceiveProps(nextProps) {
            this.currentRequest = nextProps.request;

            ApiFetcher(nextProps.request)
                .then(data => {
                    if (data.id === this.currentRequest) {
                        this.setState({data});
                    }
                })
        }

        render() {
            return <WrappedComponent {...this.props} data={this.state.data}/>
        }
    }

    RxComponent.propTypes = {
        request: propTypes.object
    };

    return RxComponent;
};