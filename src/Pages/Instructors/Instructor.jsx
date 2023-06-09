import React, { useContext } from 'react';
import img from "../../assets/warrior.jpg"

const Class = ({ person }) => {
    const { name, _id, Image, email } = person;
    return (
        <div className="card card-compact w-full bg-base-200 shadow-xl">
            {
                Image ? <figure className='px-10 lg:px-20 pt-10'><img className='rounded-xl h-60 w-full' src={Image} /></figure> : <figure className='px-10 lg:px-20 pt-10'><img className='rounded-xl h-60 w-full' src={img} /></figure>
            }
            <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl">{name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Class;