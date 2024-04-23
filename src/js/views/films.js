import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

import "../../styles/home.css";

export const Films = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1 className="text-white">Films</h1>
		<div className="row d-flex mt-4">
			{store.films.map((film, index) => 
			<div key={"f" + (index+1)} className="col-12 col-md-6 col-xl-3 my-xl-2">
				<Card 
				image={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/films/${index+1}.jpg`}
				title={film.title}
				uid={"f" + (index+1)}
				/>
			</div>
			)}
		</div>
	</div>
	);
}