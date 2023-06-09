import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['addedclass'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addedclass');
            return res.json();
        }
    })
    const ManageClass = classes;

    const handleApprove = item =>{
        fetch(`http://localhost:5000/addedclass/approve/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${item.ClassName} is Approved!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDeny = item =>{
        fetch(`http://localhost:5000/addedclass/deny/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${item.ClassName} is Denied!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='h-full w-11/12 mx-auto'>
            <Helmet>
                <title>Art Of Defense | Manage Classes</title>
            </Helmet>
            <div className='text-center mb-5'>
                <h2 className='text-4xl font-semibold'>Manage Classes</h2>
            </div>
            <div className="uppercase font-semibold h-[60px] flex justify-between items-center gap-5 py-10">
                <h3 className="text-xl">Total Classes: {ManageClass.length}</h3>
            </div>
            <div className="overflow-x-auto w-full pb-10">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Instructor Info</th>
                            <th>Price</th>
                            <th>
                                <div>
                                    <p>Available</p>
                                    <p>Seats</p>
                                </div>
                            </th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ManageClass.map((item, index) => <tr
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
                                <td>
                                    <div className=''>
                                        <p>{item.InstructorName}</p>
                                        <p>{item.InstructorEmail}</p>
                                    </div>
                                </td>
                                <td>${item.Price}</td>
                                <td>{item.AvailableSeats}</td>
                                <td>{item.status}</td>
                                <td>{ item.status === 'denied' || item.status === 'approved' ? <div className="flex flex-col gap-2"><button disabled={true} className="btn btn-sm normal-case">Approve</button> <button disabled={true} className="btn btn-sm normal-case ">Deny</button></div> : 
                                    <div className=" flex gap-2 flex-col">
                                        <button onClick={() => handleApprove(item)} className="btn btn-sm btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400">Approve</button>   
                                        <button onClick={() => handleDeny(item)} className="btn btn-sm btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400">Deny</button>   
                                    </div>
                                    }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;