import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

import "../../styles/home.css";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1>Vehicles</h1>
		<div className="row d-flex">
		{store.vehicles.map((vehicle, index) => 
		<div className="col-12 col-md-6 col-xl-3 my-xl-2">
			<Card 
			key={index+1}
			title={vehicle.name}
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