import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import '../assets/css/CryptocurrencyDetails.css';
import Loader from '../components/common/Loader';
import Button from '../components/common/Button';
import CryptocurrencyDetailsItem from '../components/CryptocurrencyDetails/Item';


@inject('Store')
@observer
class CryptocurrencyDetails extends Component {

    componentWillMount() {
        this.fetchData();
    } 

    componentWillUnmount() {
        this.clearData();
    }

    fetchData = () => {
        this.props.Store.fetchCryptocurrencyItem(this.props.match.params.id);
    }

    clearData() {
        this.props.Store.clearCryptocurrencyItem();
    }

    render() {
        var cryptocurrencyItem = this.props.Store.CryptocurrencyItem;
        var selectedCurrency = this.props.Store.currency;    

        if (!cryptocurrencyItem || !selectedCurrency) return <Loader />;

	  	return(
		  	<div>
                <CryptocurrencyDetailsItem
                    cryptocurrencyItem={cryptocurrencyItem}
                    selectedCurrency={selectedCurrency}
                />

                <Button value={'Refresh'} action={this.fetchData} />

	        </div>
		);
    }
}

export default CryptocurrencyDetails;