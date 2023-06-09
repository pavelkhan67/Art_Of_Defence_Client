
import { useQuery } from "@tanstack/react-query";
import Class from "./Class";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularClass = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-six-mu.vercel.app/class');
            return res.json();
        }
    })
    const popularClasses = classes;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <section className="mb-10">
                <p className="text-center text-3xl lg:text-5xl pt-5 pb-10 font-semibold">Popular Classes</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {
                        popularClasses.map(item => <Class
                            key={item._id}
                            item={item}
                        ></Class>)
                    }
                </div>
                <div className="text-center">
                    <Link to='/classes'><button className="btn btn-outline border-0 border-r-4 border-b-4 bg-slate-200 mt-8">View All Classes</button></Link>
                </div>
            </section>
        </motion.div>
    );
};

export default PopularClass;