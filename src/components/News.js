import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';


const News = (props) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1); 
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loadingBarProgress, setLoadingBarProgress] = useState(0);

    document.title = `WEB APP - ${capitalizeFirstLetter(props.category)}`;

    const fetchMoreData = async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=7c87b8d55d8d48169d69bc0dfd2178bd&page=${page}`;
            const response = await fetch(url);
            const parsedData = await response.json();

            setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
            setPage((prevPage) => prevPage + 1);
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
            updateLoadingBar(100);
        }
    };

    const updateLoadingBar = (progress) => {
        setLoadingBarProgress(progress);
    };

    useEffect(() => {
        setLoading(true);
        fetchMoreData();
    }, [props.category]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/News"></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navbar" id="linkheader">
                            <Link className="link" to="/News/general">
                                General
                            </Link>
                            <Link className="link" to="/News/sports">
                                Sports
                            </Link>
                            <Link className="link" to="/News/entertainment">
                                Entertainment
                            </Link>
                            <Link className="link" to="/News/health">
                                Health
                            </Link>
                            <Link className="link" to="/News/science" disabled>
                                Science
                            </Link>
                            <Link className="link" to="/News/technology" disabled>
                                Technology
                            </Link>
                            <Link className="link" to="/News/business" disabled>
                                Business
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="contain" className="container">
                <h1 align="center">
                    Top Headlines From <span id="heads">{capitalizeFirstLetter(props.category)}</span> Category
                </h1>
                <LoadingBar color='#f11946' progress={loadingBarProgress} />
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={
                    loading && (
                        <div className="loadingio-spinner-dual-ring-z1yu915vs">
                            <div className="ldio-wx2nfe9nsed">
                                <div></div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => (
                            <Newsitem
                                key={`${element.title}-${index}`}
                                description={element.description ? element.description.slice(0, 88) : ' '}
                                title={element.title ? element.title.slice(0, 50) : ' '}
                                imageurl={element.urlToImage}
                                URL={element.url}
                                source={element.source.name}
                                date={element.publishedAt}
                            />
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
            </div>
        </>
    );
};

export default News;
