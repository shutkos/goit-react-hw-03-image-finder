import React, { Component } from "react";
import classes from "./Modal.module.css";

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.code === "Escape") {
            this.props.onToggleModal();
        }
    };

    handleBackdropClick = (event) => {
        if (event.target !== event.currentTarget) {
            this.props.onToggleModal();
        }
    };

    render() {
        return (
            <div className={classes.Overlay} onClick={this.handleBackdropClick}>
                <div className={classes.Modal}>
                    <img src={this.props.largeImageURL} alt={this.props.tags} />
                </div>
            </div>
        );
    }
}

export default Modal;