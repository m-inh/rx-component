import React, {Component} from 'react';
import propTypes from 'prop-types';

class RequestsPresenter extends Component {
    render() {
        const {requests} = this.props;

        return (
            <div>
                Requested:
                {
                    requests.map((rq, i) =>
                        (i !== requests.length - 1) ?
                            <span key={rq}>{rq}  </span>
                            : <span key={rq}><strong>{rq}</strong>  </span>
                    )
                }
            </div>
        );
    }
}

RequestsPresenter.propTypes = {
    requests: propTypes.array
};

export default RequestsPresenter;
