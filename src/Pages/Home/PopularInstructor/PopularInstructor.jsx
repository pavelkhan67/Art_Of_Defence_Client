import { useQuery } from "@tanstack/react-query";
import Instructor from "./Instructor";

const PopularInstructor = () => {

    const {data: instructor = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/instructor');
            return res.json();
        }
    })
    const popularInstructors = instructor;

    return (
        <section className="mb-10">
            <p className="text-center text-5xl pb-10 font-semibold">Popular instructors</p>
            
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popularInstructors.map(person => <Instructor
                        key={person._id}
                        person={person}
                    ></Instructor>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline border-0 border-r-4 border-b-4 bg-slate-100 mt-8">View All Instructors</button>
            </div>
        </section>
    );
};

export default PopularInstructor;