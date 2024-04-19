import React from "react";
import { Link } from "react-router-dom";

export const Character = ({ image, title, gender, hairColor, eyeColor }) => {
	return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">
                    <p>Gender: {gender}</p>
                    <p>Hair Color: {hairColor}</p>
                    <p>Eye Color: {eyeColor}</p>
                </div>
                <a href="#" className="btn btn-primary">Learn more!</a>
            </div>
        </div>
	);
};
