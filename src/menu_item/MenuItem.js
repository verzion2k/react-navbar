import React, { Component } from 'react';
import './scss/MenuItem.scss';
import Icon from '../icon/Icon';

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
		const { isDropdown, isAuth, name, dropdownItems, item } = this.props;
		const { showDropdown, showSubItems } = this.state;

		return (
			<li className={isAuth ? 'menu__item__auth' : 'menu__item'}>
				<div className="menu__item__wrapper">
					<button className="menu__link" onClick={this.handleDropdown}>
						{name}
					</button>
					{isDropdown && <Icon />}
				</div>
				<ul>
					{showDropdown &&
						dropdownItems.map((item, index) => {
							return (
								<li onClick={showSubItems ? this.handleSubItems : null} key={item.id}>
									{item.name}
									{item.isDropdown && (
										<React.Fragment>
											<Icon />
											{showSubItems && (
												<ul>
													<li>{item.subItems['0'].name}</li>
													<li>{item.subItems['1'].name}</li>
													<li>{item.subItems['2'].name}</li>
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
