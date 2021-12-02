import React from 'react';
import './portfolio.css';
import Carousel from "../Carousel/Carousel";

export const Portfolio = () => {
    return <div className="section section--portfolio">
        <h2 className="section__title">Portfolio</h2>
        <Carousel/>
        <aside className="aside">
            <h4 className="aside__title">Contamos con nuestra comunidad en Discord</h4>
        <a href="https://discord.gg/phJtsABx" className="btn">Súmate a Discord</a>

        </aside>
    </div>
}

export default Portfolio;