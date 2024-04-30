import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Starships = () => {
	const { store, actions } = useContext(Context)
	const [starshipUids, setStarshipsUids] = useState([])

	useEffect(() => {
		setStarshipsUids(actions.getUID("starships"))
	},[store.starships])

	return (
	<div className="text-center mt-5">
		<h1 className="text-white title">Starships</h1>
		<div className="row d-flex justify-content-center">
			{store.starships.map((starship, index) => 
			<div key={"s" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 	
				image={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/starships/s${starshipUids[index]}.jpg`}
				title={starship.name}
				uid={"s" + starshipUids[index]}
				/>
			</div>
			)}
		</div>
	</div>
	);
}