import React, { Component } from 'react';
import './scss/Menu.scss';
import MenuItem from '../menu_item/MenuItem';

export default class Menu extends Component {
	render() {
		return (
			<ul className="menu">
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
			</ul>
		);
	}
}
