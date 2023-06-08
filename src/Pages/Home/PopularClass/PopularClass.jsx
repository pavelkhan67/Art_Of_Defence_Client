
import { useQuery } from "@tanstack/react-query";
import Class from "./Class";

const PopularClass = () => {

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    const popularClasses = classes;

    return (
        <section className="mb-10">
            <p className="text-center text-5xl py-10 font-semibold">Popular Classes</p>
            
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularClasses.map(item => <Class
                        key={item._id}
                        item={item}
                    ></Class>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline border-0 border-r-4 border-b-4 mt-8">View All Classes</button>
            </div>
        </section>
    );
};

export default PopularClass;