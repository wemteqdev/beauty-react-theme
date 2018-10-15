import React, { Component } from 'react';
import PageLayout from './components/pages/pagelayout';
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <PageLayout/>
                
            </Provider>
        );
    }
}

export default App;
