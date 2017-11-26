import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import * as mockData from '../../../__mocks__/mockData';
import CryptocurrencyDetailsItem from '../../../react/components/CryptocurrencyDetails/Item';


configure({ adapter: new Adapter() });

describe('CryptocurrencyDetailsItem', () => {

    it('It renders data without crashing...', () => {

        const detailsItem = shallow(
            <CryptocurrencyDetailsItem
                cryptocurrencyItem={mockData.cryptocurrencyItem}
                selectedCurrency={mockData.selectedCurrency}
            />
        );

        expect(detailsItem.find('.coinster-crypto-details-item')).toHaveLength(1);

    });

});
