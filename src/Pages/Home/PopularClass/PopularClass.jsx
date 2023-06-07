import useClass from "../../../hooks/useClass";
import Class from "./Class";

const PopularClass = () => {

    const [classes] = useClass();
    const popularClasses = classes;

    return (
        <section className="mb-20">
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
            <button className="btn btn-outline border-0 border-t-4 border-b-4 mt-8">View All Classes</button>
            </div>
        </section>
    );
};

export default PopularClass;