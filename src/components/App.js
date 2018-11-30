import React, {Component} from 'react';
import IDComposer from "./IDComposer";
import DataContainer from "./DataContainer";
import RequestsPresenter from "./RequestsPresenter";
import IDPresenter from "./IDPresenter";
import DataContainerRxVer from "./DataContainerRxVer";

class App extends Component {
    state = {
        id: 0,
        requests: []
    };

    _handleChangeID() {
        const newID = this.state.id + 1;
        const newRequestList = this.state.requests.concat(newID);
        this.setState({id: newID, requests: newRequestList});
    }

    render() {
        const {id, requests} = this.state;

        return (
            <div className="App">
                <div>
                    <IDComposer onChangeID={this._handleChangeID.bind(this)}/><br/>
                    <IDPresenter id={id}/><br/>
                    <RequestsPresenter requests={requests}/>
                </div>

                <div>
                    <h2>Not use Rx</h2>
                    <DataContainer id={id}/><br/>
                </div>

                <div>
                    <h2>Use Rx</h2>
                    <DataContainerRxVer request={id}/><br/>
                </div>
            </div>
        );
    }
}

export default App;
