import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

import "../../styles/home.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [uids, setUids] = useState([])

	useEffect(() => {
		getUID(store.characters)
	},[])

	function getUID(category) {
		console.log(store.characters);
        let newUidsArray = category.map(element => { element.url?.[element.url.length -2]; console.log(element.url)});
        setUids(prevUids => [...prevUids, ...newUidsArray]);
    }

	console.log(store.characters);

	return (
	<div className="text-center mt-5">
		<h1 className="text-white">Characters</h1>
		<div className="row d-flex justify-content-center">
			{store.characters.map((character, index) => 
			<div key={"c" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 	
				image={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/characters/c${character.url?.[character.url.length -2]}.jpg`}
				title={character.name}
				uid={"c" + (index+1)}
				/>
				<p className="text-white">{character.url?.[character.url.length -2]}</p>
			</div>
			)}
		</div>
	</div>
	);
}