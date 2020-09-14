import React, { Component } from "react";
import classes from "./Searchbar.module.css";

class Searchbar extends Component {
    state = { inputValue: "" };

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: "" });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <header className={classes.Searchbar}>
                <form className={classes.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={classes.SearchForm_button}>
                        <span className={classes.SearchForm_button_label}>Search</span>
                    </button>

                    <input
                        className={classes.SearchForm_input}
                        type="text"
                        placeholder="Search images and photos"
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;