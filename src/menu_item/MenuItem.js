import React, { Component } from 'react';
import './scss/MenuItem.scss';
import Icon from '../icon/Icon';
import Input from '../input/Input';

export default class MenuItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showDropdown: false,
			showSubItems: false
		};
	}

	handleDropdown = (e) => {
		e.preventDefault();

		this.setState({
			showDropdown: !this.state.showDropdown
		});
	};

	handleSubItems = (e) => {
		e.preventDefault();

		this.setState({
			showSubItems: !this.state.showSubItems
		});
	};

	render() {
		const { isDropdown, isAuth, name, dropdownItems, login } = this.props;
		const { showDropdown, showSubItems } = this.state;

		let menuItemClass = 'menu__item';
		if (isAuth && showDropdown) {
			menuItemClass += ' menu__item__auth--active';
		} else if (isAuth) {
			menuItemClass += ' menu__item__auth';
		} else if (showDropdown) {
			menuItemClass += ' menu__item--active';
		}

		return (
			<li className={menuItemClass}>
				<div className="menu__item__wrapper">
					<a href className="menu__link" onClick={this.handleDropdown}>
						{name}
					</a>
					{isDropdown && <Icon />}
				</div>
				<ul>
					{isAuth && showDropdown && <Input login={login} />}

					{showDropdown &&
						isDropdown &&
						dropdownItems.map((item, index) => {
							return (
								<li
									className={
										item.isDropdown && showSubItems ? (
											'menu__item__dropdown--active'
										) : (
											'menu__item__dropdown'
										)
									}
									onClick={item.isDropdown ? this.handleSubItems : undefined}
									key={item.id}
								>
									{item.name}
									{item.isDropdown && (
										<React.Fragment>
											<Icon />
											{showSubItems && (
												<ul>
													<li className="menu__item__sub">{item.subItems['0'].name}</li>
													<li className="menu__item__sub">{item.subItems['1'].name}</li>
													<li className="menu__item__sub">{item.subItems['2'].name}</li>
												</ul>
											)}
										</React.Fragment>
									)}
								</li>
							);
						})}
				</ul>
			</li>
		);
	}
}
