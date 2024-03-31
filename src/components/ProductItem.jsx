/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image from '../ui-elements/Image';

const ProductItem = (item) => {
    const { img, img_2x, tags, title, autor, date, views, text, onClick } = item
    return (
        <li className="product__item" onClick={onClick}>
            <Image image={img} imageMobile={img_2x} title={title} />
            <div className="product__desc">
                <p className="product__category">{tags}</p>
                <h2 className="product__title">{title}</h2>
                <ul className="info__list">
                    <li className="info__item">{autor}</li>
                    <li className="info__item">{date}</li>
                    <li className="info__item">{views}</li>
                </ul>
                <p className="product__text">{text}</p>
            </div>
        </li>
    );
};

export default ProductItem;