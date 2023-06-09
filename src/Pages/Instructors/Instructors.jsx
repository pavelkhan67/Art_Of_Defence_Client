import React from 'react';
import Instructor from "./Instructor"
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

const Instructors = () => {
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-server-six-mu.vercel.app/instructors');
            return res.json();
        }
    })
    const AllInstructor = instructors;
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Helmet>
                <title>Art Of Defense | Instructors</title>
            </Helmet>
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    AllInstructor.map(person => <Instructor
                        key={person._id}
                        person={person}
                    ></Instructor>)
                }
            </div>
        </motion.div>
    );
};

export default Instructors;