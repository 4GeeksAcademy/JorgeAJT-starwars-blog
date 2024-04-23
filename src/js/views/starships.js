import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

import "../../styles/home.css";
import starship2 from "../../img/starships/2.jpg"
import starship3 from "../../img/starships/3.jpg"

export const Starships = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1 className="text-white">Starships</h1>
		<div className="row d-flex">
			{store.starships.map((starship, index) => 
			<div key={"s" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 
				image={starship3}
				title={starship.name}
				uid={"s" + (index+1)}
				/>
			</div>
			)}
		</div>
	</div>
	);
}