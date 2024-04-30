import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Planets = () => {
	const { store, actions } = useContext(Context)
	const [planetsUids, setPlanetsUids] = useState([])

	useEffect(() => {
		setPlanetsUids(actions.getUID("planets"))
	},[store.planets])

	return (
	<div className="text-center mt-5">
		<h1 className="text-white title">Planets</h1>
		<div className="row d-flex justify-content-center">
			{store.planets.map((planet, index) => 
			<div key={"p" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 	
				image={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/planets/p${planetsUids[index]}.jpg`}
				title={planet.name}
				uid={"p" + planetsUids[index]}
				/>
			</div>
			)}
		</div>
	</div>
	);
}