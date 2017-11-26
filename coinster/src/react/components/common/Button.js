import React, { Component } from 'react';
import '../../assets/css/common/Button.css';


class Button extends Component {

	render() {

		return (
			<input
				className="coinster-button"
				type="button"
				value={this.props.value} onClick={() => this.props.action()}
			/>
		);
	}
}
export default Button;