import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Journal = () => <h2>Journal</h2>;
const JournalEntry = () => <h2>JournalEntry</h2>;

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                <div>
                    <Header />
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact={true} path="/journal" component={Journal} />
                    <Route path="/journal/new" component={JournalEntry} />
                </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);