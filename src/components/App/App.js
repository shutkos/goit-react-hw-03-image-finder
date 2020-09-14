import React, {Component} from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import imagesApi from "../../services/api";

export default class App extends Component {
    state = {
        images: [],
        loading: false,
        error: null,
        searchQuery: "",
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;

        if (prevQuery !== nextQuery) {
            this.fetchImages();
        }
        if (prevState.images.length > 12) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }
    }

    fetchImages = () => {
        const {searchQuery, page} = this.state;
        this.setState({loading: true});

        imagesApi
            .fetchImagesWithQuery(searchQuery, page)
            .then((images) =>
                this.setState((prevState) => ({
                    images: [...prevState.images, ...images],
                    page: prevState.page + 1,
                }))
            )
            .catch((error) => this.setState({error}))
            .finally(() => this.setState({loading: false}));
    };

    handleSearchFormSubmit = (query) => {
        this.setState({
            searchQuery: query,
            page: 1,
            images: [],
        });
    };

    scrollPage = async () => {
        this.setState((state) => ({
            page: state.page + 1,
        }));
        await this.fetchImages();
    };

    render() {
        const {images, loading} = this.state;
        return (
            <>
                <Searchbar onSubmit={this.handleSearchFormSubmit}/>
                {images.length > 0 && <ImageGallery images={images}/>}
                {loading && <Loader/>}
                {images.length > 0 && !loading && <Button onClick={this.scrollPage}/>}
            </>
        );
    }
}