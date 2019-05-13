import React, {Component} from 'react';
import './scss/Menu.scss';
import MenuItem from '../menu_item/MenuItem';

export default class Menu extends Component {
    render() {
        const {menuItems} = this.props;

        const authMenu = menuItems.filter(auth => {
            return auth.isAuth === true;
        });

        const menu = menuItems.filter(item => {
            return item.isAuth === false;
        });

        return (
            <React.Fragment>
                <ul className='menu'>
                    {menu.map((item) => {
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
                        )

                    })}
                </ul>

                <ul className='menu__auth'>
                    {authMenu.map((item) => {
                        return (
                            <MenuItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                isAuth={item.isAuth}
                                login={item.login}
                                selected={item.selected}
                            />
                        )

                    })}
                </ul>
            </React.Fragment>
        )

    }
}
