import React, { Component } from 'react';
import './scss/InputItem.scss';

export default class InputItem extends Component {
	render() {
		const { type, name, placeholder } = this.props;
		return <input type={type} name={name} placeholder={placeholder} className="menu__form__control" />;
	}
}
