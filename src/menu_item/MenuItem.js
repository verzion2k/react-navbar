import React, { Component } from 'react';
import './scss/MenuItem.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown);

export default class MenuItem extends Component {
	render() {
		return (
			<li className="menu__item">
				<div className="menu__item__wrapper">
					<a href className="menu__link">
						SZÉCHENYI ÚT
					</a>
					<FontAwesomeIcon icon={faCaretDown} className="menu__icon" />
				</div>
			</li>
		);
	}
}
