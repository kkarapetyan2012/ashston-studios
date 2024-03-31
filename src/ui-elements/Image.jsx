/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Image = ({ image, imageMobile, title, className, img }) => {
    return (
        <>
            {img ? <img className={className} src={img} alt={title} /> :
            <picture>
                <source srcSet={image} media="(min-width: 720px)" />
                <source srcSet={imageMobile} media="(min-width: 360px)" />
                <img className={className} src={imageMobile} alt={title} />
            </picture>
            }
        </>
        
    );
};

export default Image;