import React from "react";
import './footer.css';
import footerLogo from '../../assets/images/footer-logo.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__navbar">
                <img src={footerLogo} alt="Code society logo" />
                <div className="footer__wrapper">
                    <p className="footer__paragraph">Servicios</p>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Desarrollo de Software</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Marketing Digital</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Diseño Gráfico</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Capacitaciones</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__wrapper">
                    <p className="footer__paragraph">Nuestra Comunidad</p>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Mentorías</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Eventos</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Talleres</a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">Inglés</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__wrapper">
                    <p className="footer__paragraph">Encuéntranos en:</p>
                    <ul className="footer__list footer__list--social-media">
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://discord.gg/phJtsABx" className="footer__link">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;