import React, {Component} from 'react';
import withRxLoader from "./withRxLoader";
import DataPresenter from "./DataPresenter";

// build request
const request = CustomerApi.buildRequest();

export default withRxLoader(request)(DataPresenter);
