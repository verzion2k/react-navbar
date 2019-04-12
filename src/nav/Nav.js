import React, { Component } from 'react';
import './scss/Nav.scss';
import logo from './icons/logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

library.add(faHamburger);

export default class Nav extends Component {
	render() {
		return (
			<main className="nav">
				<div className="nav__left">
					<img src={logo} alt="logo" className="nav__logo" />
				</div>
				<div className="nav__main">
					<h1 className="nav__title">Székesfehérvári Református Egyházközség</h1>
				</div>
				<div className="nav__right">
					<FontAwesomeIcon icon="hamburger" className="nav__collapse__button" />
				</div>
			</main>
		);
	}
}
