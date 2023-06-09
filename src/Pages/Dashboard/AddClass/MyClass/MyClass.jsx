import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyClass = () => {
    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['addedclass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/addedclass');
            return res.json();
        }
    })
    const MyClass = classes;
    console.log(MyClass);
    return (
        <div className='h-full w-9/12 mx-auto'>
            <Helmet>
                <title>Art Of Defense | My Classes</title>
            </Helmet>
            <div className='text-center mb-5'>
                <h2 className='text-4xl font-semibold'>My Classes</h2>
            </div>
            <div className="uppercase font-semibold h-[60px] flex justify-between items-center gap-5 py-10">
                <h3 className="text-xl">Total Classes: {MyClass.length}</h3>
            </div>
            <div className="overflow-x-auto w-full pb-10">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Total student</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-square rounded-md w-12 h-12">
                                            <img src={item.ClassImage} alt="Order image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td>${item.Price}</td>
                                <td>{item.TotalStudents}</td>
                                <td>{item.status}</td>
                                {
                                    item.status !== 'pending' || 'approved' ?  <td>{item.feedback}</td> :  ''
                                    
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;