import React, {Component} from 'react';
import propTypes from 'prop-types';

class IDComposer extends Component {
    _handleClick() {
        this.props.onChangeID();
    }

    render() {
        return (
            <div>
                <button
                    onClick={this._handleClick.bind(this)}
                >Generate new ID
                </button>
            </div>
        );
    }
}

IDComposer.propTypes = {
    onChangeID: propTypes.func
};

export default IDComposer;
