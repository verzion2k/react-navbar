import React, { Component } from 'react';
import './scss/Nav.scss';
import logo from './icons/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/Menu';
import Auth from '../auth/Auth';

library.add(faBars);

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleMenu: true
		};
	}

	handleOnToggle = () => {
		const { toggleMenu } = this.state;
		this.setState({
			toggleMenu: !toggleMenu
		});
	};

	render() {
		const { toggleMenu } = this.state;
		return (
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
				<div className={!toggleMenu ? 'nav__menu' : 'nav__menu d-none'}>
					<Menu />
					<Auth />
				</div>
			</main>
		);
	}
}
