import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

import "../../styles/home.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1 className="text-white">Characters</h1>
		<div className="row d-flex">
			{store.characters.map((character, index) => 
			<div key={"c" + (index+1)} className="col-12 col-md-6 col-xl-2 my-xl-2 offset-xl-1">
				<Card 	
				image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${index+1}.jpg`}
				title={character.name}
				uid={"c" + (index+1)}
				/>
			</div>
			)}
		</div>
	</div>
	);
}