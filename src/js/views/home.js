import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
	<div className="text-center mt-5">
		<h1>Hello There! This is the Star wars Blog!</h1>
		<h3>Consult here any information about Star Wars you'd like to know</h3>
		<Link to="/characters/">
			<h2>Characters</h2>
		</Link>
		<Link to="/starships/">
			<h2>Starships</h2>
		</Link>
		<Link to="/planets/">
			<h2>Planets</h2>
		</Link>
		<Link to="/species/">
			<h2>Species</h2>
		</Link>
		<Link to="/vehicles/">
			<h2>Vehicles</h2>
		</Link>
		<Link to="/films/">
			<h2>Films</h2>
		</Link>
	</div>
	);
}