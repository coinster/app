import React, { Component } from 'react';
import '../../assets/css/common/Header.css';
import logo from '../../assets/images/Header/logo.svg';


class Header extends Component {

    render() {
        return (
            <div>
                <header className="coinster-app-header">
                    <img src={logo} className="coinster-logo" alt="logo" />
                    <h1 className="coinster-app-header-title">Welcome to coinsteR</h1>
                </header>
            </div>
        );
    }
}
export default Header;
