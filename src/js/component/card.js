import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = ({ image, title, uid, episode }) => {

    const { store, actions } = useContext(Context);

    const [favStar, setFavStar] = useState("")

    const handleButton= () => {
        const isFavorite = store.favorites.some((favorite) => favorite.uid === uid)
        if(isFavorite) {
            actions.removeFavorite(uid)
        } 
        else {
            actions.addFavorite(title, uid)
        }
    }

    useEffect(() => {
        const isFavorite = store.favorites.some((favorite) => favorite.uid === uid)
        if(isFavorite) {
            setFavStar("fa-solid fa-star text-warning") 
        } else {
            setFavStar("fa-regular fa-star text-warning") 
        }
    },[store.favorites])

	return (
        <div className="card border-0">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                {actions.selectCategory(uid) === "films" ? 
                <h5 className="card-title text-start text-white ms-1">Episode {episode}: {title}</h5>
                :
                <h5 className="card-title text-start text-white ms-1">{title}</h5>
                }
                <div className="card-text">
                </div>
                <div className="d-flex justify-content-between">
                <Link to={`/${actions.selectCategory(uid)}/${uid.slice(1)}`} className="btn btn-warning mt-2 fw-bold">
					<span>Read more!</span>
				</Link>
                <button onClick={handleButton} className="border-0 fs-4 fav">
                    <i className={favStar}></i>
                </button>
                </div>
            </div>
        </div>
	);
};
