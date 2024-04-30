import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { SingleCharacter } from "./views/singleCharacter";
import { Starships } from "./views/starships";
import { SingleStarship } from "./views/singleStarship";
import { Planets } from "./views/planets";
import { SinglePlanet } from "./views/singlePlanet";
import { Species } from "./views/species";
import { SingleSpecie } from "./views/singleSpecie";
import { Vehicles } from "./views/vehicles";
import { SingleVehicle } from "./views/singleVehicle";
import { Films } from "./views/films";
import { SingleFilm } from "./views/singleFilm";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters/" element={<Characters />} />
						<Route path="/characters/:character_uid" element={<SingleCharacter />} />
						<Route path="/starships/" element={<Starships />} />
						<Route path="/starships/:starship_uid" element={<SingleStarship />} />
						<Route path="/planets/" element={<Planets />} />
						<Route path="/planets/:planet_uid" element={<SinglePlanet />} />
						<Route path="/species/" element={<Species />} />
						<Route path="/species/:specie_uid" element={<SingleSpecie />} />
						<Route path="/vehicles/" element={<Vehicles />} />
						<Route path="/vehicles/:vehicle_uid" element={<SingleVehicle />} />
						<Route path="/films/" element={<Films />} />
						<Route path="/films/:film_uid" element={<SingleFilm />} />
						<Route path="*" element={<h1 className="title text-center text-white mt-5">Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
