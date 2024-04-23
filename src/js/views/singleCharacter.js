import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({})
	const params = useParams();

	useEffect(()=>{
		fetch(`https://swapi.py4e.com/api/people/${params.character_uid}`)
		.then(response => response.json())
		.then(data => {
			setCharacter(data);
			console.log(data.homeworld)
		});
	},[])
	console.log(params);
	console.log(character);
	// console.log(character.homeworld.length - 2); // "https://swapi.py4e.com/api/planets/1/" ==> "1"
	console.log(store.planets[0]?.name); // Tatooine
	return (
		<div className="container">
			<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${params.character_uid}.jpg`}/>
			<div className="text-white">
			<p>Name: {character.name}</p>
			<p>Height: {character.height}</p>
			<p>Weight: {character.mass}</p>
			<p>Birth year: {character.birth_year}</p>
			<p>Gender: {character.gender}</p>
			<p>Homeworld: {}
			</p>
			</div>
			<h1 className="text-white">This is the single character view: {params.character_uid}</h1>
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};