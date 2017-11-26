import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import CryptocurrencyList from './views/CryptocurrencyList';
import CryptocurrencyDetails from './views/CryptocurrencyDetails';
import Settings from './views/Settings';
import Store from './stores/Store';
import { observer, inject } from 'mobx-react';
import * as DEFAULTS from './configs/Defaults';


@inject('Store')
@withRouter
@observer
class Main extends Component {
    
    constructor() {
        super();

        this.setAppCurrency();
    }

    setAppCurrency() {
        Store.setCurrency(
            localStorage.getItem('coinster_currency') ? 
            localStorage.getItem('coinster_currency') :
            DEFAULTS.DEFAULT_CURRENCY
        );
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path='/' render={() => (<Redirect to='/list/' />)} /> 
                    <Route path='/details/:id' component={CryptocurrencyDetails} />
                    <Route path='/settings/' component={Settings} />
                    <Route path='/list/' component={CryptocurrencyList} />
                </Switch>
            </div>
        );
    }
}

export default Main;