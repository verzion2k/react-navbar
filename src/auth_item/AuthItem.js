import React, { Component } from 'react';
import './scss/AuthItem.scss';

export default class AuthItem extends Component {
	render() {
		return (
			<li className="auth__item">
				<a href className="auth__link">
					BEJELENTKEZES
				</a>
			</li>
		);
	}
}
