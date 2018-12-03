import React, {Component} from 'react';
import IDComposer from "./IDComposer";
import DataContainer from "./DataContainer";
import RequestsPresenter from "./RequestsPresenter";
import IDPresenter from "./IDPresenter";
import ObserverDataContainer from "./ObserverDataContainer";

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
                    <h2>Not use Observable</h2>
                    <DataContainer id={id}/><br/>
                </div>

                <div>
                    <h2>Use Observable</h2>
                    <ObserverDataContainer id={id}/><br/>
                </div>
            </div>
        );
    }
}

export default App;
