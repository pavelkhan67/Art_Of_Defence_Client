import React from 'react';
import useInstructor from '../../hooks/useInstructor';
import Instructor from "./Instructor"

const Instructors = () => {
    const [ instructors ] = useInstructor();
    const AllInstructor = instructors;
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    AllInstructor.map(person => <Instructor
                        key={person._id}
                        person={person}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;