import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStarship = props => {
	const { store, actions } = useContext(Context);
	const [starship, setStarship] = useState({})
	const { starship_uid } = useParams();

	const isMobile = useMediaQuery({ query: '(max-width: 770px)' });

	useEffect(()=>{
		fetch(`https://swapi.py4e.com/api/starships/${starship_uid}`)
		.then(response => response.json())
		.then(data => { setStarship(data) });
	},[])

	return (
		<div className="container mb-5">
			{isMobile ? 			
			<div className="d-flex justify-content-center mt-5 single-view-mobile flex-column">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/starships/s${starship_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5 mt-4">
					<h4 className="mb-3">{starship.name}</h4>
					<p>Model: {starship.model}</p>
					<p>Manufacturer: {starship.manufacturer}</p>
					<p>Cost in credits: {starship.cost_in_credits}</p>
					<p>Length: {starship.length}</p>
					<p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
					<p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Cargo capacity: {starship.cargo_capacity}</p>
					<p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
					<p>Megalight per hour(MGLT): {starship.MGLT}</p>
					<p>Starship class: {starship.starship_class}</p>
				</div>
			</div>
			:
			<div className="d-flex justify-content-center mt-5 single-view">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/starships/s${starship_uid}.jpg`} className="rounded-3 single-img"/>
				<div className="text-white ms-5">
					<h4 className="mb-3">{starship.name}</h4>
					<p>Model: {starship.model}</p>
					<p>Manufacturer: {starship.manufacturer}</p>
					<p>Cost in credits: {starship.cost_in_credits}</p>
					<p>Length: {starship.length}</p>
					<p>Max atmosphering speed: {starship.max_atmosphering_speed}</p>
					<p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Cargo capacity: {starship.cargo_capacity}</p>
					<p>Hyperdrive rating: {starship.hyperdrive_rating}</p>
					<p>Megalight per hour(MGLT): {starship.MGLT}</p>
					<p>Starship class: {starship.starship_class}</p>
				</div>
			</div>
		}
		</div>
	);
};

SingleStarship.propTypes = {
	match: PropTypes.object
};