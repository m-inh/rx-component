import React, {Component} from 'react';
import propTypes from 'prop-types';
import ApiFetcher from "../ApiFetcher";

class DataContainer extends Component {
    state = {
        data: {}
    };

    componentWillReceiveProps(nextProps) {
        const {id} = nextProps;
        ApiFetcher(id)
            .then(data => {
                this.setState({data});
            })
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                Current fetched data: <strong>{JSON.stringify(data)}</strong>
            </div>
        );
    }
}

DataContainer.propTypes = {
    id: propTypes.number
};

export default DataContainer;
