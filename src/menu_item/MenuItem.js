import React, {Component} from 'react';
import './scss/MenuItem.scss';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import MenuContext from '../menu_context/MenuContext';

export default class MenuItem extends Component {
    render() {
        const {isDropdown, isAuth, name, dropdownItems, login, id, selected} = this.props;
        const {showSubItems, handleDropdown, handleSubItems, width} = this.context;

        const isMobile = width < 1024;

        let menuItemClass = 'menu__item';
        if (isAuth && selected) {
            menuItemClass += ' menu__item__auth--active';
        } else if (isAuth) {
            menuItemClass += ' menu__item__auth';
        } else if (selected) {
            menuItemClass += ' menu__item--active';
        }

        return (
            <li className={menuItemClass} onMouseEnter={!isMobile ? handleDropdown : undefined}  id={id} selected={selected}>
                <div className={isAuth ? 'menu__item__wrapper--auth' : 'menu__item__wrapper'}>
                    <a className="menu__link" onClick={isMobile ? handleDropdown : undefined} id={id} selected={selected}>
                        {name}
                    </a>
                    {isDropdown && !isMobile && <Icon/>}
                </div>
                <ul>
                    {isAuth && selected && <Input login={login}/>}

                    {selected &&
                    isDropdown &&
                    dropdownItems.map((item) => {
                        return (
                            <li
                                className={
                                    item.isDropdown && showSubItems ? (
                                        'menu__item__dropdown--active'
                                    ) : (
                                        'menu__item__dropdown'
                                    )
                                }
                                onClick={item.isDropdown && isMobile ? handleSubItems : undefined}
                                onMouseOver={!isMobile ? undefined : undefined}
                                key={item.id}
                                selected={item.selected}
                                id={item.id}
                            >
                                {item.name}
                                {item.isDropdown && (
                                    <React.Fragment>
                                        <Icon/>
                                        {showSubItems && (
                                            <ul>
                                                <li className="menu__item__sub">{item.subItems['0'].name}</li>
                                                <li className="menu__item__sub">{item.subItems['1'].name}</li>
                                                <li className="menu__item__sub">{item.subItems['2'].name}</li>
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

MenuItem.contextType = MenuContext;
