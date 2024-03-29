import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import useEnrolled from '../../../hooks/useEnrolled';

const MyEnrolled = () => {

    const [enrolled, refetch] = useEnrolled();
    const EnrolledClass = enrolled;

    return (
        <div className='h-full w-9/12 mx-auto'>
            <Helmet>
                <title>Art Of Defense | My Enrolled Class</title>
            </Helmet>
            <div className='text-center mb-5'>
                <h2 className='text-4xl font-semibold'>My Enrolled Class</h2>
            </div>
            <div className="uppercase font-semibold py-10">
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