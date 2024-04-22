import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = ({ image, title, id }) => {

    const { store, actions } = useContext(Context);

    const [favStar, setFavStar] = useState("fa-regular fa-star text-warning")

    const handleButton= (e) => {
        if(e.target.className === "fa-regular fa-star text-warning") {
            setFavStar("fa-solid fa-star text-warning") 
            actions.setFavorites(title)
        } 
        else {
            setFavStar("fa-regular fa-star text-warning")
            actions.setFavorites(title)
        }
    }

    useEffect(() => {
        handleButton
    },[store.favorites])

	return (
        <div className="card border-0">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start ms-1">{title}</h5>
                <div className="card-text">
                </div>
                <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning mt-2">Read more!</a>
                <button onClick={handleButton} className="bg-white border-0 fs-4 fav">
                    <i className={favStar}></i>
                </button>
                </div>
            </div>
        </div>
	);
};
