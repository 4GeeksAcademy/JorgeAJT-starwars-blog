import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [characterUids, setCharacterUids] = useState([])

	useEffect(() => {
		setCharacterUids(actions.getUID("characters"))
	},[store.characters])

	return (
	<div className="text-center mt-5">
		<h1 className="text-white title">Characters</h1>
		<div className="row d-flex justify-content-center">
			{store.characters.map((character, index) => 
			<div key={"c" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 	
				image={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/characters/c${characterUids[index]}.jpg`}
				title={character.name}
				uid={"c" + characterUids[index]}
				/>
			</div>
			)}
		</div>
	</div>
	);
}