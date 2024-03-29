import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://summer-camp-server-six-mu.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://summer-camp-server-six-mu.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete ${user.name} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-six-mu.vercel.app/users/admin/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `User ${user.name} is deleted!`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="h-full w-11/12 mx-auto">
            <Helmet>
                <title>Bistro Boss | Manage users</title>
            </Helmet>
            <div className='text-center mb-5'>
                <h2 className='text-4xl font-semibold'>Manage Users</h2>
            </div>
            <div className="w-full mx-10 mb-5">
            <h3 className="text-xl uppercase font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                        user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : user.role = 'student'
                                    }</td>
                                <td>{ user.role === 'admin' || user.role === 'instructor' ? <div className="flex flex-col gap-2"><button disabled={true} className="btn btn-sm normal-case ">Make Admin</button> <button disabled={true} className="btn btn-sm normal-case ">Make Instructor</button></div> : 
                                    <div className=" flex gap-2 flex-col">
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400">Make Admin</button>   
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-sm btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400">Make Instructor</button>   
                                    </div>
                                    }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default AllUsers;