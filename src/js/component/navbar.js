import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import normalLogo from "../../img/normal-logo.png"

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg bg-black border-bottom border-body fw-bold" data-bs-theme="dark">
			<div className="container-fluid flex-column">
				<div className="d-flex align-items-center">
				<i className="fa-solid fa-book-journal-whills fs-1"></i>
				<Link to="/" className="navbar-brand my-2">
					<img className="sw-logo" src={normalLogo}/>
				</Link>
				<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					</form>
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item my-auto">
							<Link to="/characters/" className="nav-link active">
								Characters
							</Link>
						</li>
						<li className="nav-item my-auto">
							<Link to="/starships/" className="nav-link active">
								Starships
							</Link>
						</li>
						<li className="nav-item my-auto">
							<Link to="/planets/" className="nav-link active">
								Planets
							</Link>
						</li>
						<li className="nav-item my-auto">
							<Link to="/species/" className="nav-link active">
								Species
							</Link>
						</li>
						<li className="nav-item my-auto">
							<Link to="/vehicles/" className="nav-link active">
								Vehicles
							</Link>
						</li>
						<li className="nav-item my-auto">
							<Link to="/films/" className="nav-link active">
								Films
							</Link>
						</li>
					</ul>					
					<div className="nav-item dropdown">
						<button className="nav-link dropdown-toggle bg-white p-2 rounded-3 ms-1" href="#" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
							Favorites 
							<span className="items-left px-2 py-1 m-1 rounded-5">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ? 						
								<li className="text-center">Empty</li> 
								:
								store.favorites.map((favElement, index) =>
								<li key={"fav" + index+1} className="d-flex align-items-center me-2">
									<a className="dropdown-item" href="#">{favElement}</a>
									<i onClick={() => actions.setFavorites(favElement)} className="fa-solid fa-dumpster btn"></i>
								</li>
								)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
