import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react';

import './App.css';
import { client } from "../Apollo";
import { HomeContainer } from "../Containers/Home/HomeContainer";
import { GlobalStyle } from "../Components/GlobaStyle";
import { AppStore } from "./AppStore";
import { AppDialog, setDialog } from "../Components/Dialog";

const stores = { appStore: new AppStore() };

export function App() {
    return (
        <ApolloProvider client={client}>
            <Provider {...stores}>
                <div className="App">
                    <GlobalStyle />
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            <Route
                                path="/home"
                                component={HomeContainer}
                            />
                        </Switch>
                    </Router>
                    <AppDialog ref={setDialog} />
                </div>
            </Provider>
        </ApolloProvider>
    );
}

