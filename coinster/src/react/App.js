import React, { Component } from 'react';
import './assets/css/App.css';
import Toolbar from './components/common/Toolbar';
import Header from './components/common/Header';
import Main from './Main';


class App extends Component {

	render() {
		return (
			<div className="coinster-app">
				<Toolbar />
				<Header />
				<Main />
			</div>
		);
	}
}
export default App;
