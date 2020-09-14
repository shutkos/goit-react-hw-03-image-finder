import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import classes from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
    return (
        <ul className={classes.ImageGallery}>
            {images.map((image) => (
                <ImageGalleryItem {...image} key={image.id} />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    toggleModal: PropTypes.func,
};

export default ImageGallery;