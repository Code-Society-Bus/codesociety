import React from "react";
import "./topbar.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from 'react-router-dom';

import { useState } from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

export const Topbar = () => {
    const $navbar = React.createRef();

    const toggleMenu = () => {
        $navbar.current.classList.toggle('header__navbar--hidden');
    }

    const [modal, toggleModal] = useState(false);

    const toggleModalComponent = (e) => {
        const $E = e.target;
        if ($E.classList.contains('modal') || $E.classList.contains('header__link--btn') || $E.classList.contains('modal__icon'))
            toggleModal(!modal)
    }

    return (
        <>
            <header className="header">
                <img src={logo} alt="Code society log" className="header__logo" />
                <button className="header__button" onClick={toggleMenu}>
                    <span className="icon icon--menu"></span>
                </button>
                <nav className="header__navbar header__navbar--hidden" ref={$navbar}>
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink activeClassName='header__link--active' exact to="/" className="header__link">Inicio</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink activeClassName='header__link--active' to="/services" className="header__link">Servicios</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink activeClassName='header__link--active' to="/portfolio" className="header__link">Portfolio</NavLink>
                        </li>
                        <li className="header__item">
                            <button onClick={toggleModalComponent} className="header__link header__link--btn">Contacto</button>
                        </li>
                    </ul>
                </nav>
            </header>
            {
                modal && <Modal onClick={toggleModalComponent}>
                    <Form />
                </Modal>
            }
        </>
    )
}

export default Topbar;