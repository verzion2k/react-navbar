import React, { Component } from 'react';
import './scss/DropdownItem.scss';
import Icon from '../icon/Icon';

export default class DropdownItem extends Component {
	render() {
		const { subDropdown } = this.props;
		return (
			<li>
				<button>Hello World</button>
				{subDropdown && <Icon />}
			</li>
		);
	}
}
