import React, { Component } from 'react';
import DropdownItem from '../dropdown_item/DropdownItem';
import './scss/Dropdown.scss';

export default class Dropdown extends Component {
	render() {
		return (
			<ul>
				<DropdownItem subDropdown />
				<DropdownItem />
				<DropdownItem subDropdown />
				<DropdownItem />
			</ul>
		);
	}
}
