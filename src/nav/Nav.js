import React, { Component } from 'react';
import './scss/Nav.scss';
import logo from './icons/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/Menu';
import MenuContext from '../menu_context/MenuContext';

library.add(faBars);

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleMenu: false,
			showDropdown: false,
			showSubItems: false,
			handleDropdown: this.handleDropdown,
			handleSubItems: this.handleSubItems,
			menuItems: [
				{
					id: '1',
					name: 'SZECHENYI UT',
					isDropdown: true,
					isAuth: false,
					dropdownItems: [
						{
							id: '11',
							name: 'KEZDOLAP',
							isDropdown: false
						},
						{
							id: '12',
							name: 'TUDNIVALOK',
							isDropdown: true,
							subItems: [
								{
									id: '121',
									name: 'SUB111'
								},
								{
									id: '122',
									name: 'SUB122'
								},
								{
									id: '133',
									name: 'SUB133'
								}
							]
						},
						{
							id: '13',
							name: 'KOSZONTO',
							isDropdown: false
						}
					]
				},
				{
					id: '2',
					name: 'MAROSHEGY',
					isDropdown: true,
					isAuth: false,
					dropdownItems: [
						{
							id: '21',
							name: 'LOREM IPSUM21',
							isDropdown: true,
							subItems: [
								{
									id: '221',
									name: 'SUB221'
								},
								{
									id: '222',
									name: 'SUB222'
								},
								{
									id: '233',
									name: 'SUB233'
								}
							]
						},
						{
							id: '22',
							name: 'LOREM IPSUM22',
							isDropdown: false
						},
						{
							id: '23',
							name: 'LOREM IPSUM23',
							isDropdown: false
						}
					]
				},
				{
					id: '3',
					name: 'BUDAI UT',
					isDropdown: true,
					isAuth: false,
					dropdownItems: [
						{
							id: '31',
							name: 'LOREM IPSUM11',
							isDropdown: false
						},
						{
							id: '32',
							name: 'LOREM IPSUM12',
							isDropdown: false
						},
						{
							id: '33',
							name: 'LOREM IPSUM13',
							isDropdown: true,
							subItems: [
								{
									id: '321',
									name: 'SUB331'
								},
								{
									id: '322',
									name: 'SUB332'
								},
								{
									id: '333',
									name: 'SUB333'
								}
							]
						}
					]
				},
				{
					id: '4',
					name: 'OLAJFA OVODA',
					isDropdown: true,
					isAuth: false,
					dropdownItems: [
						{
							id: '41',
							name: 'LOREM IPSUM13211',
							isDropdown: false
						},
						{
							id: '42',
							name: 'LOREM IPSUM321312',
							isDropdown: true,
							subItems: [
								{
									id: '421',
									name: 'SUB441'
								},
								{
									id: '422',
									name: 'SUB442'
								},
								{
									id: '433',
									name: 'SUB443'
								}
							]
						},
						{
							id: '43',
							name: 'LOREM IP213213SUM13',
							isDropdown: false
						}
					]
				},
				{
					id: '5',
					name: 'TALENTUM ALTALANOS ISKOLA',
					isDropdown: true,
					isAuth: false,
					dropdownItems: [
						{
							id: '51',
							name: 'LOREM IPSUM11zea',
							isDropdown: false
						},
						{
							id: '52',
							name: 'LOREM IPSUM12dads',
							isDropdown: true,

							subItems: [
								{
									id: '521',
									name: 'SUB551'
								},
								{
									id: '522',
									name: 'SUB552'
								},
								{
									id: '533',
									name: 'SUB553'
								}
							]
						},
						{
							id: '53',
							name: 'LOREM IPSUM13dsadsa',
							isDropdown: false
						}
					]
				},
				{
					id: '6',
					name: 'BEJELNTKEZES',
					isAuth: true,
					login: true
				},
				{
					id: '7',
					name: 'REGISZTRACIO',
					isAuth: true,
					login: false
				}
			]
		};
	}

	handleDropdown = (e) => {
		e.preventDefault();
		const { menuItems } = this.state;
		console.log(e.target.id);

		menuItems.map((data, index) => {
			if (data[index] === e.target.id) {
				console.log(data[index]);
			} else {
				console.log(data[index]);
				this.setState({
					showDropdown: !this.state.showDropdown
				});
			}
		});
	};

	handleSubItems = (e) => {
		e.preventDefault();

		this.setState({
			showSubItems: !this.state.showSubItems
		});
	};

	handleOnToggle = () => {
		const { toggleMenu } = this.state;
		this.setState({
			toggleMenu: !toggleMenu
		});
	};

	render() {
		const { toggleMenu } = this.state;
		return (
			<MenuContext.Provider value={this.state}>
				<main className="nav">
					<header className="nav__header">
						<div className="nav__left">
							<img src={logo} alt="logo" className="nav__logo" />
						</div>
						<div className="nav__main">
							<h1 className="nav__title">Székesfehérvári Református Egyházközség</h1>
						</div>
						<div className="nav__right" onClick={this.handleOnToggle}>
							<FontAwesomeIcon icon={faBars} className="nav__collapse__button" />
						</div>
					</header>
					{toggleMenu && (
						<div className="nav__menu">
							<Menu menuItems={this.state.menuItems} />
						</div>
					)}
				</main>
			</MenuContext.Provider>
		);
	}
}
