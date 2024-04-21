import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

import "../../styles/home.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<div className="row d-flex">
		{store.characters.map((character, index) => 
		<div className="col-12 col-md-6 col-xl-3 my-xl-2">
			<Card 
			key={index+1}
			image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${index+1}.jpg`}
			title={character.name}
			/>
		</div>
		)}
		</div>
        <Link to="/">
			<button className="btn btn-primary">Back home</button>
		</Link>
	</div>
	);
}