import React from 'react';

const Class = ({ item }) => {
    const { ClassName, _id, ClassImage, InstructorName, InstructorEmail, AvailableSeats, TotalStudents, Price } = item;
    return (
        <div className="card card-compact w-full bg-base-200 shadow-xl">
            <figure className='px-10 lg:px-20 pt-10'><img className='rounded-xl h-60 w-full' src={ClassImage} alt="Images" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl">{ClassName}</h2>
                <p>Total Students: {TotalStudents}</p>
            </div>
        </div>
    );
};

export default Class;