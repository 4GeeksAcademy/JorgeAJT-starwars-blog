import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

import "../../styles/home.css";

export const Species = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1 className="text-white">Species</h1>
		<div className="row d-flex">
			{store.species.map((specie, index) => 
			<div key={"e" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 				
				title={specie.name}
				uid={"e" + (index+1)}
				/>
			</div>
			)}
		</div>
	</div>
	);
}