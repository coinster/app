import React, { Component } from 'react';


class CryptocurrencyDetailsItem extends Component {

render() {
    var cryptocurrencyItem = this.props.cryptocurrencyItem;
    var selectedCurrency = this.props.selectedCurrency;

    return (
            <div className="coinster-crypto-details-item">
                Rank: {cryptocurrencyItem.rank} <br />
                Name: {cryptocurrencyItem.name} <br />
                Symbol: {cryptocurrencyItem.symbol} <br />
                Price: {cryptocurrencyItem['price_' + selectedCurrency.toLowerCase()]} {selectedCurrency} <br />
                24h volume: {cryptocurrencyItem['24h_volume_' + selectedCurrency.toLowerCase()]} {selectedCurrency} <br />
                Market cap: {cryptocurrencyItem['market_cap_' + selectedCurrency.toLowerCase()]} {selectedCurrency} <br />
                Price in BTC : {cryptocurrencyItem.price_btc} BTC <br />
                1h change: {cryptocurrencyItem.percent_change_1h} % <br />
                24h change: {cryptocurrencyItem.percent_change_24h} % <br />
                7d change: {cryptocurrencyItem.percent_change_7d} % <br />
                Total supply: {cryptocurrencyItem.total_supply} <br />
                Available supply: {cryptocurrencyItem.available_supply} <br />
            </div>
        );
    }
}
export default CryptocurrencyDetailsItem;


