import React, { Component } from 'react';
import './scss/MenuItem.scss';
import Icon from '../icon/Icon';

export default class MenuItem extends Component {
	render() {
		const { isDropdown, isAuth, name, dropdownItems, isActive } = this.props;

		return (
			<li className={isAuth ? 'menu__item__auth' : 'menu__item'}>
				<div className="menu__item__wrapper">
					<button className="menu__link">{name}</button>
					{isDropdown && <Icon />}
				</div>
				{dropdownItems &&
					isActive &&
					dropdownItems.map((item, index) => {
						return (
							<ul key={item.id}>
								<li>
									{item.name}
									{item.isDropdown && (
										<React.Fragment>
											<Icon />
											{isActive && (
												<ul>
													<li>{item.subItems['0'].name}</li>
													<li>{item.subItems['1'].name}</li>
													<li>{item.subItems['2'].name}</li>
												</ul>
											)}
										</React.Fragment>
									)}
								</li>
							</ul>
						);
					})}
			</li>
		);
	}
}
