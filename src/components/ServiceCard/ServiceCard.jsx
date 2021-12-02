import React from 'react';
import './serviceCard.css';

export const ServiceCard = ({ title, text, img }) => {
    return <div className="card">
        <div className="card__container">
            <img src={img} alt={title} className="card__image" />
            <h3 className="card__title">{title}</h3>
        </div>
        <p className="card__text">{text}</p>
    </div>
}

export default ServiceCard;