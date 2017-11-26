import {observable, action} from 'mobx';
import * as DEFAULTS from '../configs/Defaults';


class Store {
    @observable currency = null;
    @observable CryptocurrencyList = null;
    @observable CryptocurrencyItem = null;

    @action fetchCryptocurrencyList () {
        fetch(DEFAULTS.BASE_URL + '?convert=' + this.currency + '&limit=100')
            .then((response) => response.json())
            .then((responseJson) => {

            this.CryptocurrencyList = responseJson;

        })
    }

    @action clearCryptocurrencyList() {
        this.CryptocurrencyList = null;
    }

    @action fetchCryptocurrencyItem(cryptocurrencyId) {
        fetch(DEFAULTS.BASE_URL + cryptocurrencyId + '/?convert=' + this.currency)
            .then((response) => response.json())
            .then((responseJson) => {

            this.CryptocurrencyItem = responseJson[0];
        })
    }

    @action clearCryptocurrencyItem() {
        this.CryptocurrencyItem = null;
    }

    @action setCurrency(currency) {
        this.currency = currency;
    }
}

export default new Store();