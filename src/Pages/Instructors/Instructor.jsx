import React from 'react';

const Class = ({ person }) => {
    const { Name, _id, Image, Email } = person;
    return (
        <div className="card card-compact w-full bg-base-200 shadow-xl">
            <figure className='px-10 lg:px-20 pt-10'><img className='rounded-xl h-60 w-full' src={Image} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl">{Name}</h2>
                <p>Email: {Email}</p>
            </div>
        </div>
    );
};

export default Class;