import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ image, title, gender, hairColor, eyeColor }) => {
	return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">
                </div>
                <a href="#" className="btn btn-primary mt-2">Learn more!</a>
            </div>
        </div>
	);
};
