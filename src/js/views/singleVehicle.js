import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const [vehicle, setVehicle] = useState({})
	const [movies, setMovies] = useState([])
	const { vehicle_uid } = useParams();

	const isMobile = useMediaQuery({ query: '(max-width: 770px)' });

	useEffect(()=>{
		fetch(`https://swapi.py4e.com/api/vehicles/${vehicle_uid}`)
		.then(response => response.json())
		.then(data => {
			setVehicle(data);
			setMovies([])
			getMovies(data.films)
		});
	},[])

	function getMovies(moviesCharacter) {
			moviesCharacter.forEach(enlace => {
				const numberCaracter = enlace.charAt(enlace.length - 2);
				const number = parseInt(numberCaracter);
				const singleMovie = store.films[number - 1];
				setMovies(prevMovies =>[...prevMovies, singleMovie]);
			});
	}

	return (
		<div className="container mb-5">
			{isMobile ? 
			<div className="d-flex justify-content-center mt-5 single-view-mobile flex-column">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/vehicles/v${vehicle_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5 mt-4">
					<h4 className="mb-3">{vehicle.name}</h4>
					<p>Model: {vehicle.model}</p>
					<p>Manufacturer: {vehicle.manufacturer}</p>
					<p>Cost in credits: {vehicle.cost_in_credits}</p>
					<p>Length: {vehicle.length}</p>
					<p>Max atmosphering speed: {vehicle.max_atmosphering_speed}</p>
					<p>Crew: {vehicle.crew}</p>
                    <p>Passengers: {vehicle.passengers}</p>
                    <p>Cargo capacity: {vehicle.cargo_capacity}</p>
					<p>Consumables: {vehicle.consumables}</p>
					<p>Vehicle class: {vehicle.vehicle_class}</p>
                    <div>Movies:
						{movies.map((movie, index) =>
							<p key={index} className="ms-5 mt-1">{movie.title}</p>
						)}
					</div>
				</div>
			</div>
			:
			<div className="d-flex justify-content-center mt-5 single-view">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/vehicles/v${vehicle_uid}.jpg`} className="rounded-3 single-img"/>
				<div className="text-white ms-5">
					<h4 className="mb-3">{vehicle.name}</h4>
					<p>Model: {vehicle.model}</p>
					<p>Manufacturer: {vehicle.manufacturer}</p>
					<p>Cost in credits: {vehicle.cost_in_credits}</p>
					<p>Length: {vehicle.length}</p>
					<p>Max atmosphering speed: {vehicle.max_atmosphering_speed}</p>
					<p>Crew: {vehicle.crew}</p>
					<p>Passengers: {vehicle.passengers}</p>
					<p>Cargo capacity: {vehicle.cargo_capacity}</p>
					<p>Consumables: {vehicle.consumables}</p>
					<p>Vehicle class: {vehicle.vehicle_class}</p>
					<div>Movies:
						{movies.map((movie, index) =>
							<p key={index} className="ms-5 mt-1">{movie.title}</p>
						)}
					</div>
				</div>
			</div>
			}
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};