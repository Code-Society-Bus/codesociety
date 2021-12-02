import React from 'react';
import './mainSection.css';
import hero from "../../assets/images/hero.png";

export const MainSection = () => {
    return (
        <section className="section section--main">
            <img className="section__hero" src={hero} alt="Computadora con teclado y ratón" />
            <div className="section__wrapper">
                <h1 className="title">Lorem ipsum dolor</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem dolore earum, est, explicabo</p>
            </div>
        </section>
    )
}

export default MainSection;