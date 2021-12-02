import React from 'react';
import './introSection.css';
import ServiceCard from '../ServiceCard/ServiceCard';

import { nanoid as uniqueId } from 'nanoid';

const cardData = [
    {
        title: "Desarrollo de Software",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto mollitia sapiente soluta sequi eaque!",
        img: require('../../assets/images/dev.png').default
    },
    {
        title: "Marketing Digital",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto mollitia sapiente soluta sequi eaque!",
        img: require('../../assets/images/marketing.png').default
    },
    {
        title: "Capatizaciones empresariales",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto mollitia sapiente soluta sequi eaque!",
        img: require('../../assets/images/cap.png').default
    },
    {
        title: "Diseño Gráfico",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto mollitia sapiente soluta sequi eaque!",
        img: require('../../assets/images/design.png').default
    }
]

const IntroSection = () => {
    return (
        <section className="section section--intro">
            <h2 className="section__title">Nuestros Servicios</h2>
            <div className="section__container">
                {
                    cardData.map(({ title, text, img }) => <ServiceCard title={title} text={text} img={img} key={uniqueId()} />)
                }
            </div>
        </section>
    )
}

export default IntroSection;