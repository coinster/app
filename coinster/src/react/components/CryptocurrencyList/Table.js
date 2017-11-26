import React, { Component } from 'react';


class CryptocurrencyListTable extends Component {
	
	renderRow(cryptocurrencyItem, index) {
  		var selectedCurrency = this.props.selectedCurrency;
  		var price = cryptocurrencyItem['price_' + selectedCurrency.toLowerCase()] + ' ' + selectedCurrency;
  		var direction = cryptocurrencyItem.percent_change_24h > 0 ? 'positive' : 'negative';
  		var changeClass = 'coinster-crypto-list-table-item-change-24-' + direction;

		return (
			<tr
				key={index}
				className="coinster-crypto-list-table-item"
				onClick={ () => this.props.goToDetails(cryptocurrencyItem.id)}
			>

				<td>{cryptocurrencyItem.rank}</td>
				<td>{cryptocurrencyItem.symbol}</td>
				<td>{price}</td>
				<td className={changeClass}>{cryptocurrencyItem.percent_change_24h} %</td>

			</tr>
		);
	}


	render() {
		return (
			<table>
				<thead>
		  			<tr className="coinster-crypto-list-table-title">
		  				<th>Rank</th>
		  				<th>Symbol</th>
		  				<th>Price</th>
		  				<th>24h +/-</th>
		  			</tr>
				</thead>
				<tbody>
			  		{this.props.CryptocurrencyList.map((cryptocurrencyItem, index) => {
			  			return this.renderRow(cryptocurrencyItem, index)
					})}
				</tbody>
			</table>
		);
	}
}
export default CryptocurrencyListTable;

