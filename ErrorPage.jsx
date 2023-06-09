import React from 'react';
import { NavLink, useRouteError } from "react-router-dom";
import img from "/src/assets/animation.gif"

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='text-center'>
            <div className=" my-5">
                    <img className=" mx-auto border-0 border-slate-700 rounded-lg" src={img} alt="" />
                <div className=" pb-5">
                    <h1 className="text-4xl">Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
                <NavLink to="/"><button className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 px-5 border-orange-400 mb-10">Back To Homepage</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;