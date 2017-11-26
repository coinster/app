import React, { Component }   from 'react';
import { observer, inject } from 'mobx-react';
import '../assets/css/Settings.css';
import Select from '../components/common/Select';
import * as DEFAULTS from '../configs/Defaults';


@inject('Store')
@observer
class Settings extends Component {

    getSelectedCurrency() {

        return this.props.Store.currency;		
    }

    handleCurrencyChange(event) {
        
        localStorage.setItem('coinster_currency', event.target.value);

        this.props.Store.setCurrency(event.target.value);
    }

    renderOptions() {

        return DEFAULTS.AVAILABLE_CURRENCIES.map((currency, index) => {

            return (
                <option key={index} value={currency}>{currency}</option>
            );
        });
    }

    render() {
        return (
            <div className="coinster-settings">
                Select currency: 
                <Select 
                    value={this.getSelectedCurrency()}
                    onChange={(event) => this.handleCurrencyChange(event)}
                    options={this.renderOptions()}
                />
            </div>
        );
    }
}

export default Settings;
