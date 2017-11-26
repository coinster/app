import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import * as mockData from '../../../__mocks__/mockData';
import CryptocurrencyListTable from '../../../react/components/CryptocurrencyList/Table';


configure({ adapter: new Adapter() });

describe('CryptocurrencyDetailsItem', () => {

	// We create empty mock because we do not expect function to be called.
	const goToDetailsMock = jest.fn();

	it('Renders with props without crashing...', () => {
	    shallow(
	        <CryptocurrencyListTable
	            CryptocurrencyList={mockData.cryptocurrencyList}
	            selectedCurrency={mockData.selectedCurrency}
	            goToDetails={goToDetailsMock}
	        />
	    );
	});

	it('It renders table title', () => {
	    const table = shallow(
	    	<CryptocurrencyListTable
	            CryptocurrencyList={mockData.cryptocurrencyList}
	            selectedCurrency={mockData.selectedCurrency}
	            goToDetails={goToDetailsMock}
	        />
		);
	    expect(table.find('.coinster-crypto-list-table-title')).toHaveLength(1);
	});

	it('It renders table rows', () => {
	    const table = shallow(
	    	<CryptocurrencyListTable
	            CryptocurrencyList={mockData.cryptocurrencyList}
	            selectedCurrency={mockData.selectedCurrency}
	            goToDetails={goToDetailsMock}
	        />
		);
	    expect(table.find('.coinster-crypto-list-table-item')).toHaveLength(2);
	});
});