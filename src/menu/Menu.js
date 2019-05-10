import React, {Component} from 'react';
import './scss/Menu.scss';
import MenuItem from '../menu_item/MenuItem';

export default class Menu extends Component {
    render() {
        const {menuItems} = this.props;

        return (
            <ul className='menu'>
                {menuItems.map((item) => {
                    return (
                            <MenuItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                isAuth={item.isAuth}
                                login={item.login}
                                selected={item.selected}
                                isDropdown={item.isDropdown}
                                dropdownItems={item.dropdownItems}
                            />
                    );
                })}
            </ul>
        )

    }
}
