import React, { Component } from 'react';
import './scss/Menu.scss';
import MenuItem from '../menu_item/MenuItem';

export default class Menu extends Component {
	render() {
		return (
			<ul className="menu">
				{this.props.menuItems.map((item, index) => {
					return (
						<MenuItem
							key={item.id}
							name={item.name}
							item={item}
							isDropdown={item.isDropdown}
							isAuth={item.isAuth}
							dropdownItems={item.dropdownItems}
							isActive={this.props.isActive}
						/>
					);
				})}
			</ul>
		);
	}
}
