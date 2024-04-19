import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Character } from "../component/character";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1>Hello There! This is the Star wars Blog!</h1>
		<h3>Consult here any information about Star Wars you'd like to know</h3>
		<div className="row d-flex">
		{store.characters.map((character, index) => 
		<div className="col-12 col-md-6 col-xl-3 my-xl-2">
			<Character 
			key={index+1}
			image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${index+1}.jpg`}
			title={character.name}
			gender={character.gender}
			hairColor={character.hair_color}
			eyeColor={character.eye_color}
			/>
		</div>
		)}
		</div>
	</div>
	);
}