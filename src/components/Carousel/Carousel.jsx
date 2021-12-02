import React, { createRef} from 'react';
import './carousel.css';
import slide from '../../assets/images/slider1.png';
import { nanoid as uniqueId } from 'nanoid';

const carouselImages = [
    {
        title: "Desayunos Perú",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi?",
        img: slide,
    },
    {
        title: "Desayunos Perú",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi?",
        img: slide,
    },
    {
        title: "Desayunos Perú",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi?",
        img: slide,
    },
    {
        title: "Desayunos Perú",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore facilis velit tenetur quaerat iure molestiae quasi?",
        img: slide,
    },
];

const images = carouselImages.length;
let counter = 0;

/* Refs */
const $carousel = createRef();

const handleSlide = (next) => {
    if (next && counter > 0)
        counter--;
    else if (!next && counter < images - 1)
        counter++;
    $carousel.current.style.setProperty('--percentage', `-${counter}00%`);
}

export const Carousel = () => {
    return (
        <div className="carousel" ref={$carousel}>
            <span onClick={() => handleSlide(true)} className="carousel__button carousel__button--left">{'<'}</span>
            <span onClick={() => handleSlide()} className="carousel__button carousel__button--right">{'>'}</span>
            <div className="carousel__container">
                <div className="carousel__images">
                    {
                        carouselImages.map(({ title, text, img }) => (
                            <div className="carousel__card" key={uniqueId()}>
                                <div className="carousel__wrapper">
                                    <h3 className="carousel__title">{title}</h3>
                                    <img src={img} alt="Página web" className="carousel__image" />
                                </div>
                                <p className="carousel__text">{text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;