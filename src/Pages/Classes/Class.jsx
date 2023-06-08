import React, { useContext} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useSelected from '../../hooks/useSelected';
import Swal from 'sweetalert2';

const Class = ({ cla }) => {
    const { ClassName, _id, ClassImage, InstructorName, InstructorEmail, AvailableSeats, TotalStudents, Price } = cla;
    const { user } = useContext(AuthContext);
    const [, refetch] = useSelected();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = cla => {
        // console.log(item);
        if (user && user.email) {
            const SelectedItem = { SelectedClassId: _id, ClassName, ClassImage, Price, Email: user.email }
            fetch('http://localhost:5000/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(SelectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            icon: 'success',
                            title: 'Class Added To My Selected Class.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to Select the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className={`card card-compact w-full ${AvailableSeats > 0 ? 'bg-base-200' : 'bg-red-300'} shadow-xl`}>
            <figure className='px-10 lg:px-20 pt-10'><img className='rounded-xl h-60 w-full' src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl justify-center py-5">{ClassName}</h2>
                <div className='flex justify-around'>
                    <div>
                        <p>Total Students: {TotalStudents}</p>
                        <p>Available Seat: {AvailableSeats}</p>
                    </div>
                    <div className='text-right'>
                        <p>Instructor Name: {InstructorName}</p>
                        <p>Instructor Email: {InstructorEmail}</p>
                    </div>
                </div>
                <p className='justify-center card-title'>Price: {Price}</p>
                {
                    AvailableSeats > 0 ?
                        <div className="card-actions justify-end">
                            <button onClick={() => handleSelect(cla)} className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Select</button>
                        </div> :
                        <div className="card-actions justify-end">
                            <button disabled={true} onClick={() => handleSelect(cla)} className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Select</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Class;