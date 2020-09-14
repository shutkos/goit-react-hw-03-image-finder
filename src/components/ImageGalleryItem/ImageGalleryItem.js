import React, {Component} from "react";
import classes from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";

class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
        this.setState((state) => ({isModalOpen: !state.isModalOpen}));
    };

    render() {
        const {isModalOpen} = this.state;
        return (
            <li className={classes.ImageGalleryItem} onClick={this.toggleModal}>
                {isModalOpen && (
                    <Modal
                        largeImageURL={this.props.largeImageURL}
                        tags={this.props.tags}
                        onToggleModal={this.toggleModal}
                    />
                )}
                <img
                    src={this.props.webformatURL}
                    alt="Your query"
                    className={classes.ImageGalleryItem_image}
                    key={this.props.id}
                />
            </li>
        );
    }
}

export default ImageGalleryItem;