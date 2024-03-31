// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactHelmet from './ReactHelmet';
import Image from '../ui-elements/Image';
import Input from '../ui-elements/Input';
import Button from '../ui-elements/Button';
import searchIcon from '../assets/img/icons/search.svg'
import arrow from '../assets/img/icons/arrow.png'
import menu from '../assets/img/icons/burgerMenu.svg'
import close from '../assets/img/icons/x.png'
import logo from '../assets/img/logo/logo.svg'

// eslint-disable-next-line react/prop-types
const Header = ({ onSearch }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            console.log('currentScrollY', currentScrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header>
                <ReactHelmet title="Logotype" description="Life style" keywords="Finde your style" />
                <div className="header__top">
                    <div className="container">
                        <div className="header__container">
                            <Button className="header__menu_mobile" onClick={toggleMobileMenu} icon={menu} />
                            <div className="heade__logo">
                                <Link to="/" className="heade__link">
                                    <Image img={logo} alt="" />
                                </Link>
                            </div>
                            <div className={`header__search ${isVisible ? 'visible' : ''}`}>
                                <Input 
                                    type="text"
                                    onChange={handleInputChange}
                                    className={`header__input ${isVisible ? 'visible' : ''}`}
                                />
                                <Button className="header__button" onClick={toggleVisibility} icon={searchIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`menu__block ${isSticky ? 'sticky' : ''} ${isMobileMenuVisible ? 'visible' : ''}`}>
                <div style={{width: isMobileMenuVisible ? '100vw' : ''}} className='menu-backdrop' onClick={toggleMobileMenu}></div>
                <div className="menu__header_mobile mobile-menu">
                    <div className="heade__logo">
                        <Link to="" className="heade__link" >
                            <Image img={logo} alt="" />
                        </Link>
                    </div>
                    <Button className="header__close" onClick={toggleMobileMenu} icon={close} />
                </div>
                <div className="container">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link to="" className="menu__link" >
                                <span>Demos</span>
                                <Image img={arrow} alt="arrow" />
                            </Link>
                            <ul className="menu__submenu__list">
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Layout</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Share Buttons</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Gallery Post</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <Link to="" className="menu__link" >
                                <span>Post</span>
                                <Image img={arrow} alt="arrow" />
                                
                            </Link>
                            <ul className="menu__submenu__list">
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Layout</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Share Buttons</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Gallery Post</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <Link to="" className="menu__link" >
                                <span>Features</span>
                                <Image img={arrow} alt="arrow" />
                            </Link>
                            <ul className="menu__submenu__list">
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Layout</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Share Buttons</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Gallery Post</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <Link className="menu__link" >
                                <span>Categories</span>
                                <Image img={arrow} alt="arrow" />
                            </Link>
                            <ul className="menu__submenu__list">
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Layout</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Share Buttons</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Gallery Post</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <Link to="" className="menu__link" >
                                <span>Shop</span>
                                <Image img={arrow} alt="arrow" />
                                
                            </Link>
                            <ul className="menu__submenu__list">
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Layout</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Share Buttons</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Gallery Post</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                                <li className="menu__submenu__item">
                                    <Link to="" className="menu__submenu__link">
                                        <span>Post Header</span>
                                        <Image img={arrow} alt="arrow" />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <Link to="" className="menu__link" >
                                <span>Buy Now</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        
        </>
        
    );
};

export default Header;