import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleSpecie = props => {
	const { store, actions } = useContext(Context);
	const [specie, setSpecie] = useState({})
	const [homeworld, setHomeworld] = useState("")
	const { specie_uid } = useParams();

	const isMobile = useMediaQuery({ query: '(max-width: 770px)' });

	useEffect(()=>{
		fetch(`https://swapi.py4e.com/api/species/${specie_uid}`)
		.then(response => response.json())
		.then(data => {
			setSpecie(data);
			getHomeworld(data.homeworld)
		});
	},[])

	function getHomeworld(planetAPI) {
		fetch(planetAPI)
		.then(response => response.json())
		.then(data => setHomeworld(data.name))
	}

	return (
		<div className="container mb-5">
			{isMobile ? 
			<div className="d-flex justify-content-center mt-5 single-view-mobile flex-column">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/species/e${specie_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5 mt-4">
					<h4 className="mb-3">{specie.name}</h4>
					<p>Classification: {specie.classification}</p>
					<p>Average height: {specie.average_height}</p>
					<p>Skin colors: {specie.skin_colors}</p>
					<p>Hair colors: {specie.hair_colors}</p>
					<p>Eye colors: {specie.eye_colors}</p>
					<p>Average lifespan: {specie.average_lifespan}</p>
                    <p>Homeworld: {homeworld}</p>
                    <p>Language: {specie.language}</p>
				</div>
			</div>
			:
			<div className="d-flex justify-content-center mt-5 single-view">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/species/e${specie_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5">
					<h4 className="mb-3">{specie.name}</h4>
					<p>Classification: {specie.classification}</p>
					<p>Average height: {specie.average_height}</p>
					<p>Skin colors: {specie.skin_colors}</p>
					<p>Hair colors: {specie.hair_colors}</p>
					<p>Eye colors: {specie.eye_colors}</p>
					<p>Average lifespan: {specie.average_lifespan}</p>
					<p>Homeworld: {homeworld}</p>
					<p>Language: {specie.language}</p>
				</div>
			</div>
			}
		</div>
	);
};

SingleSpecie.propTypes = {
	match: PropTypes.object
};