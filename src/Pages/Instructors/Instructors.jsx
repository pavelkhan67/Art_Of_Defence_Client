import React from 'react';
import Instructor from "./Instructor"
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    })
    const AllInstructor = instructors;
    return (
        <div>
            <Helmet>
                <title>Art Of Defense | Instructors</title>
            </Helmet>
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