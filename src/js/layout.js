import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { SingleCharacter } from "./views/singleCharacter";
import { Starships } from "./views/starships";
import { Planets } from "./views/planets";
import { Species } from "./views/species";
import { Vehicles } from "./views/vehicles";
import { Films } from "./views/films";
import { Single } from "./views/single";
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
						<Route path="/planets/" element={<Planets />} />
						<Route path="/species/" element={<Species />} />
						<Route path="/vehicles/" element={<Vehicles />} />
						<Route path="/films/" element={<Films />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
