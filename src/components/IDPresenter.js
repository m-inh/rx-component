import React, {Component} from 'react';
import propTypes from 'prop-types';

class IDPresenter extends Component {
    render() {
        return (
            <div>
                Current ID: <strong>{this.props.id}</strong>
            </div>
        );
    }
}

IDPresenter.propTypes = {
    id: propTypes.number
};

export default IDPresenter;
