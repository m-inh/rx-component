import React, {Component} from 'react';
import propTypes from 'prop-types';
import {fetchData} from '../apis/IdApi';
import {ObservableFetcher} from "../ObservableFetcher";
const observableFetcher = ObservableFetcher();

class ObserverDataContainer extends Component {
    state = {
        data: {}
    };

    componentWillReceiveProps(nextProps) {
        const {id} = nextProps;
        observableFetcher.fetch(fetchData, [id])
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

ObserverDataContainer.propTypes = {
    id: propTypes.number
};

export default ObserverDataContainer;
