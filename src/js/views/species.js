import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Species = () => {
	const { store, actions } = useContext(Context)
	const [speciesUids, setSpeciesUids] = useState([])

	useEffect(() => {
		setSpeciesUids(actions.getUID("species"))
	},[store.species])

	return (
	<div className="text-center mt-5">
		<h1 className="text-white title">Species</h1>
		<div className="row d-flex justify-content-center">
			{store.species.map((specie, index) => 
			<div key={"e" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 	
				image={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/species/e${speciesUids[index]}.jpg`}
				title={specie.name}
				uid={"e" + speciesUids[index]}
				/>
			</div>
			)}
		</div>
	</div>
	);
}