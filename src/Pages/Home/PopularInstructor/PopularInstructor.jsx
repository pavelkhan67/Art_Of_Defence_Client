import { useQuery } from "@tanstack/react-query";
import Instructor from "./Instructor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularInstructor = () => {

    const { data: instructor = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-six-mu.vercel.app/instructor');
            return res.json();
        }
    })
    const popularInstructors = instructor;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <section className="mb-10">
                <p className="text-center text-4xl lg:text-5xl pb-10 font-semibold">Popular instructors</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {
                        popularInstructors.map(person => <Instructor
                            key={person._id}
                            person={person}
                        ></Instructor>)
                    }
                </div>
                <div className="text-center">
                    <Link to='/instructors'><button className="btn btn-outline border-0 border-r-4 border-b-4 bg-slate-200 mt-8">View All Instructors</button></Link>
                </div>
            </section>
        </motion.div>
    );
};

export default PopularInstructor;