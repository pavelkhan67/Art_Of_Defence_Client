import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useSelected from '../../../hooks/useSelected';

const MySelected = () => {
    const [classes, refetch] = useSelected();
    const total = classes.reduce((sum, item) => item.Price + sum, 0);
    const Price = parseFloat(total.toFixed(2))

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete ${item.ClassName} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-six-mu.vercel.app/selected/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Selected Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='h-full w-9/12 mx-auto'>
            <Helmet>
                <title>Art Of Defense | My Selected Class</title>
            </Helmet>
            <div className='text-center mb-5'>
                <h2 className='text-4xl font-semibold'>My Selected Class</h2>
            </div>
            <div className="uppercase font-semibold h-[60px] flex justify-between items-center gap-5 py-10">
                <h3 className="text-xl">Total Classes: {classes.length}</h3>
                <h3 className="text-xl">Total Price: ${Price}</h3>
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
                            <th>Delete</th>
                            <th>Pay</th>
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
                                    {item.ClassName}
                                </td>
                                <td>${item.Price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 px-5 border-orange-400">PAY</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MySelected;