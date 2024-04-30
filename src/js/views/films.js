import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

import "../../styles/home.css";

export const Films = () => {
	const { store, actions } = useContext(Context)
	const [filmsUids, setFilmsUids] = useState([])

	useEffect(() => {
		setFilmsUids(actions.getUID("films"))
	},[store.species])

	return (
	<div className="text-center mt-5">
		<h1 className="text-white title">Films</h1>
		<div className="row d-flex justify-content-center">
			{store.films.map((film, index) => 
			<div key={"f" + (index+1)} className="col-12 col-md-6 col-lg-4 col-xxl-3 my-xl-2">
				<Card 	
				image={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/films/f${filmsUids[index]}.jpg`}
				episode={film.episode_id}
				title={film.title}
				uid={"f" + filmsUids[index]}
				/>
			</div>
			)}
		</div>
	</div>
	);
}