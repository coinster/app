import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../assets/css/CryptocurrencyList.css';
import Loader from '../components/common/Loader';
import Button from '../components/common/Button';
import CryptocurrencyListTable from '../components/CryptocurrencyList/Table';


@inject('Store')
@observer
class CryptocurrencyList extends Component {

    componentWillMount() {

        this.fetchData();
    }

    componentWillUnmount() {

        this.props.Store.clearCryptocurrencyList();

    }

    fetchData = () => {
        
        this.props.Store.fetchCryptocurrencyList();
    }

    goToDetails = (cryptocurrencyId) => {

        this.props.history.push({
            pathname: '/details/' + cryptocurrencyId
        });

    }

    render() {
        var cryptocurrencyList = this.props.Store.CryptocurrencyList;
        var selectedCurrency = this.props.Store.currency;

        if (!cryptocurrencyList || !selectedCurrency) return <Loader />;        

        return(
            <div className="coinster-crypto-list">
                <Button value={'Refresh'} action={this.fetchData} />
                <CryptocurrencyListTable
                    CryptocurrencyList={cryptocurrencyList}
                    selectedCurrency={selectedCurrency}
                    goToDetails={this.goToDetails}
                />
            </div>
        );
    }
}

export default CryptocurrencyList;

