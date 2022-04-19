import React from 'react';
import { IMGPATH } from '../apis/apis'

const Movie = ({ overview, poster_path, title, vote_average }) => {
    const setVoteColor = (vote) => {
        if (vote >= 8) {
            return 'green'
        }
        else if (vote >= 5 && vote < 8) {
            return 'orange'
        }
        else {
            return 'red'
        }
    }
    return (
        <div className="movie">
            <img className='move-img' src={poster_path ? (IMGPATH + poster_path) : 'https://wikiclipart.com/wp-content/uploads/2016/09/popcorn-clip-art-4.jpeg'} alt={title} />
            <div className="movie-info">
                <h3 className="movie-title">{title}</h3>
                <span className={`${setVoteColor(vote_average)}` + " movie-voteAvg"}>{vote_average}</span>
            </div>
            <div className="movie-overlay">
                <h2 className="movie-overheading">Overview {title}:</h2>
                <p className="movie-overview">{overview}</p>
            </div>
        </div>
    );
};

export default Movie;