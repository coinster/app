import React, { Component } from 'react';
import '../../assets/css/common/Select.css';


class Select extends Component {

    render() {

        return (
            <select
                className="coinster-select"
                value={this.props.value}
                onChange={(event) => this.props.onChange(event)}
            >

                {this.props.options}

            </select>
        );
    }
}
export default Select;

