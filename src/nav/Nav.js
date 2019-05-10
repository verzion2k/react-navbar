import React, {Component} from 'react';
import './scss/Nav.scss';
import logo from './icons/logo.png';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/Menu';
import MenuContext from '../menu_context/MenuContext';

library.add(faBars);

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: false,
            width: window.innerWidth,
            showSubItems: false,
            handleDropdown: this.handleDropdown,
            handleSubItems: this.handleSubItems,
            menuItems: [
                {
                    id: '0',
                    name: 'SZECHENYI UT',
                    isDropdown: true,
                    isAuth: false,
                    selected: false,
                    dropdownItems: [
                        {
                            id: '11',
                            name: 'KEZDOLAP',
                            selected: false,
                            isDropdown: false
                        },
                        {
                            id: '12',
                            name: 'TUDNIVALOK',
                            isDropdown: true,
                            selected: false,
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
                            selected: false,
                            isDropdown: false
                        }
                    ]
                },
                {
                    id: '1',
                    name: 'MAROSHEGY',
                    isDropdown: true,
                    isAuth: false,
                    selected: false,
                    dropdownItems: [
                        {
                            id: '21',
                            name: 'LOREM IPSUM21',
                            isDropdown: true,
                            selected: false,
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
                            selected: false,
                            isDropdown: false
                        },
                        {
                            id: '23',
                            name: 'LOREM IPSUM23',
                            selected: false,
                            isDropdown: false
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'BUDAI UT',
                    isDropdown: true,
                    isAuth: false,
                    selected: false,
                    dropdownItems: [
                        {
                            id: '31',
                            name: 'LOREM IPSUM11',
                            selected: false,
                            isDropdown: false
                        },
                        {
                            id: '32',
                            name: 'LOREM IPSUM12',
                            selected: false,
                            isDropdown: false
                        },
                        {
                            id: '33',
                            name: 'LOREM IPSUM13',
                            isDropdown: true,
                            selected: false,
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
                    id: '3',
                    name: 'OLAJFA OVODA',
                    isDropdown: true,
                    isAuth: false,
                    selected: false,
                    dropdownItems: [
                        {
                            id: '41',
                            name: 'LOREM IPSUM13211',
                            selected: false,
                            isDropdown: false
                        },
                        {
                            id: '42',
                            name: 'LOREM IPSUM321312',
                            isDropdown: true,
                            selected: false,
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
                            selected: false,
                            isDropdown: false
                        }
                    ]
                },
                {
                    id: '4',
                    name: 'TALENTUM ALTALANOS ISKOLA',
                    isDropdown: true,
                    isAuth: false,
                    selected: false,
                    dropdownItems: [
                        {
                            id: '51',
                            name: 'LOREM IPSUM11zea',
                            selected: false,
                            isDropdown: false
                        },
                        {
                            id: '52',
                            name: 'LOREM IPSUM12dads',
                            isDropdown: true,
                            selected: false,
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
                            selected: false,
                            isDropdown: false
                        }
                    ]
                },
                {
                    id: '5',
                    name: 'BEJELNTKEZES',
                    isAuth: true,
                    login: true,
                    selected: false
                },
                {
                    id: '6',
                    name: 'REGISZTRACIO',
                    isAuth: true,
                    selected: false,
                    login: false
                }
            ]
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    handleDropdown = (e) => {

        e.preventDefault();

        const items = [...this.state.menuItems];
        const targetKey = e.currentTarget.id;

        // const dropdownArray = items[targetKey].dropdownItems.map((value) => value.id);
        // console.log(dropdownArray);

        if (!items[targetKey].selected) {
            items[targetKey].selected = true;
        } else {
            items[targetKey].selected = false;
        }

        this.setState({
            items
        });
    };

    handleSubItems = (e) => {
        e.preventDefault();

        this.setState({
            showSubItems: !this.state.showSubItems
        });
    };

    handleOnToggle = () => {
        const {toggleMenu} = this.state;

        this.setState({
            toggleMenu: !toggleMenu
        });
    };

    render() {
        const {toggleMenu, width} = this.state;
        const isMobile = width < 1024;

        return (
            <MenuContext.Provider value={this.state}>
                {isMobile ? (
                    <main className="nav">
                        <header className="nav__header">
                            <div className="nav__left">
                                <img src={logo} alt="logo" className="nav__logo"/>
                            </div>

                            <div className="nav__main">
                                <h1 className="nav__title">Székesfehérvári Református Egyházközség</h1>
                            </div>

                            <div className="nav__right" onClick={this.handleOnToggle}>
                                <FontAwesomeIcon icon={faBars} className="nav__collapse__button"/>
                            </div>
                        </header>
                        {toggleMenu && (
                            <div className="nav__menu">
                                <Menu menuItems={this.state.menuItems}/>
                            </div>
                        )}
                    </main>
                ) : (
                    <main className="nav">
                        <header className="nav__header">
                            <div className="nav__left">
                                <img src={logo} alt="logo" className="nav__logo"/>
                            </div>

                            <div className="nav__main">
                                <div className="nav__menu">
                                    <h1 className="nav__title">Székesfehérvári Református Egyházközség</h1>
                                    <Menu menuItems={this.state.menuItems}/>
                                </div>
                            </div>

                            <div className="nav__right" onClick={this.handleOnToggle}>
                                <FontAwesomeIcon icon={faBars} className="nav__collapse__button"/>
                            </div>
                        </header>
                        {toggleMenu && (
                            <div className="nav__menu">
                                <Menu menuItems={this.state.menuItems}/>
                            </div>
                        )}
                    </main>
                )}
            </MenuContext.Provider>
        );
    }
}
