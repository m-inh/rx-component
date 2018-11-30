import React, {Component} from 'react';
import propTypes from 'prop-types';

class DataPresenter extends Component {
    render() {
        const {data} = this.props;

        return (
            <div>
                Current fetched data: <strong>{JSON.stringify(data)}</strong>
            </div>
        );
    }
}

DataPresenter.propTypes = {
    data: propTypes.object
};

export default DataPresenter;
