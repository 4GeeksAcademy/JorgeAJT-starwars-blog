import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = ({ image, title, uid }) => {

    const { store, actions } = useContext(Context);

    const [favStar, setFavStar] = useState("")

    const handleButton= () => {
        if(store.favorites.includes(title)) {
            actions.removeFavorite(title)
        } 
        else {
            actions.addFavorite(title)
        }
        console.log(uid);
    }

    useEffect(() => {
        if(store.favorites.includes(title)) {
            setFavStar("fa-solid fa-star text-warning") 
        } else {
            setFavStar("fa-regular fa-star text-warning") 
        }
    },[store.favorites])

    const selectCategory = () => {
        let categorySelected = ""
        switch(uid[0]) {
            case "c":
                categorySelected = "characters"
                break
            case "s":
                categorySelected = "starships"
                break  
            case "p":
                categorySelected = "planets"
                break    
            case "e":
                categorySelected = "species"
                break
            case "v":
                categorySelected = "vehicles"
                break    
            case "f":
                categorySelected = "films"
                break    
        }
        return categorySelected
    }

	return (
        <div className="card border-0">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start ms-1">{title}</h5>
                <div className="card-text">
                </div>
                <div className="d-flex justify-content-between">
                {}
                <Link to={`/${selectCategory()}/${uid.slice(1)}`} className="btn btn-warning mt-2">
					<span>Read more!</span>
				</Link>
                <button onClick={handleButton} className="bg-white border-0 fs-4 fav">
                    <i className={favStar}></i>
                </button>
                </div>
            </div>
        </div>
	);
};
