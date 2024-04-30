import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleFilm = props => {
	const { store, actions } = useContext(Context);
	const [movie, setMovie] = useState({})
	const { film_uid } = useParams();

	const isMobile = useMediaQuery({ query: '(max-width: 770px)' });

	useEffect(()=>{
			getMovies()
	},[])

	function getMovies() {
        store.films.forEach(film => {
            const numberCaracter = film.url.charAt(film.url.length - 2);
            const number = parseInt(numberCaracter);
            if(number == film_uid) setMovie(film)
            
        });
	};

	return (
		<div className="container mb-5">
			{isMobile ? 
			<div className="d-flex justify-content-center mt-5 single-view-mobile flex-column">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/films/f${film_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-2 mt-4">
					<h4 className="mb-3">Episode {movie.episode_id}: {movie.title}</h4>
					<p>Director: {movie.director}</p>
					<p>Producer: {movie.producer}</p>
					<p>Release date: {movie.release_date}</p>
					<p>Opening crawl: </p>
                    <p>{movie.opening_crawl}</p>
				</div>
			</div>
			:
			<div className="d-flex justify-content-center mt-5 single-view">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/films/f${film_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5">
					<h4 className="mb-3">Episode {movie.episode_id}: {movie.title}</h4>
					<p>Director: {movie.director}</p>
					<p>Producer: {movie.producer}</p>
					<p>Release date: {movie.release_date}</p>
					<p>Opening crawl: </p>
					<p>{movie.opening_crawl}</p>
				</div>
			</div>
			}
		</div>
	);
};

SingleFilm.propTypes = {
	match: PropTypes.object
};