import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Vehicles = () => {
	const { store, actions } = useContext(Context)
	const [vehiclesUids, setVehiclesUids] = useState([])

	useEffect(() => {
		setVehiclesUids(actions.getUID("vehicles"))
	},[store.species])

	return (
	<div className="text-center mt-5">
		<h1 className="text-white title">Vehicles</h1>
		<div className="row d-flex justify-content-center">
			{store.vehicles.map((vehicle, index) => 
			<div key={"v" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 	
				image={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/vehicles/v${vehiclesUids[index]}.jpg`}
				title={vehicle.name}
				uid={"v" + vehiclesUids[index]}
				/>
			</div>
			)}
		</div>
	</div>
	);
}