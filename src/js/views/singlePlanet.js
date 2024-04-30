import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = useState({})
    const [residents, setResidents] = useState([])
	const { planet_uid } = useParams();

	const isMobile = useMediaQuery({ query: '(max-width: 770px)' });

	useEffect(()=>{
		fetch(`https://swapi.py4e.com/api/planets/${planet_uid}`)
		.then(response => response.json())
		.then(data => { 
            setPlanet(data) 
            getResidents(data.residents)
        });
	},[])

    function getResidents(residents) {
        residents.map((resident => {
            fetch(resident)
            .then(response => response.json())
            .then(data => setResidents(prevResidents=>[...prevResidents, data.name]))
        }))
    }

	return (
		<div className="container mb-5">
			{isMobile ? 
			<div className="d-flex justify-content-center mt-5 single-view-mobile flex-column">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/planets/p${planet_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5 mt-4">
					<h4 className="mb-3">{planet.name}</h4>
					<p>Rotation period: {planet.rotation_period}</p>
					<p>Orbital period: {planet.orbital_period}</p>
					<p>Diameter: {planet.diameter}</p>
					<p>Climate: {planet.climate}</p>
					<p>Gravity: {planet.gravity}</p>
					<p>Terrain: {planet.terrain}</p>
                    <p>Surface water: {planet.surface_water}</p>
                    <p>Population: {planet.population}</p>
					<div>Residents: 				
                        {residents.map((resident, index) =>
							<p key={index} className="ms-5 mt-1">{resident}</p>
						)}</div>
				</div>
			</div>
			:
			<div className="d-flex justify-content-center mt-5 single-view">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/planets/p${planet_uid}.jpg`} className="rounded-3 single-img"/>
				<div className="text-white ms-5">
					<h4 className="mb-3">{planet.name}</h4>
					<p>Rotation period: {planet.rotation_period}</p>
					<p>Orbital period: {planet.orbital_period}</p>
					<p>Diameter: {planet.diameter}</p>
					<p>Climate: {planet.climate}</p>
					<p>Gravity: {planet.gravity}</p>
					<p>Terrain: {planet.terrain}</p>
					<p>Surface water: {planet.surface_water}</p>
					<p>Population: {planet.population}</p>
					<div className="">Residents: 				
						{residents.map((resident, index) =>
							<p key={index} className="ms-5 mt-1">{resident}</p>
						)}</div>
				</div>
			</div>
			}
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};