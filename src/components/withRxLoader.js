import React, {Component} from 'react';
import propTypes from 'prop-types';
import ApiFetcher from "../ApiFetcher";

export default (request) => (WrappedComponent) => {
    class RxComponent extends Component {
        currentRequest = null;
        state = {
            data: null
        };

        componentWillReceiveProps(nextProps) {
            this.currentRequest = nextProps.request;

            // todo: write more ...
            ApiFetcher.fetch(nextProps.request)
                .then(responseData => {
                    if (request === this.currentRequest) {
                        this.setState({responseData});
                    }
                })
        }

        render() {
            const {request, props} = this.props;
            // data -> key we can define out of this component
            return <WrappedComponent {...props} data={this.state.data}/>
        }
    }

    RxComponent.propTypes = {
        request: propTypes.object
    };

    return RxComponent;
};
