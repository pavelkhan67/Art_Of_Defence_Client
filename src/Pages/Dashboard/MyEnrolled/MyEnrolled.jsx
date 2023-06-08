import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const MyEnrolled = () => {

    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolled = [] } = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payment?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })
    const EnrolledClass = enrolled;
    console.log(EnrolledClass);

    return (
        <div className='h-full w-9/12 mx-auto'>
            <Helmet>
                <title>Art Of Defense | My Enrolled Class</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-between items-center gap-5 py-10">
                <h3 className="text-xl">Total Classes: {EnrolledClass.length}</h3>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            EnrolledClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-square rounded-md w-12 h-12">
                                            <img src={item.image} alt="Order image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolled;