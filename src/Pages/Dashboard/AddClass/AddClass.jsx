import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, insname, insemail, aseat, tstudent, status } = data;
                    const newItem = { ClassName: name, Price: parseFloat(price), ClassImage: imgURL, InstructorName: insname, InstructorEmail: insemail, AvailableSeats: parseFloat(aseat), TotalStudents: parseFloat(tstudent), status }
                    // console.log(newItem)
                    axiosSecure.post('/addedclass', newItem)
                        .then(data => {
                            // console.log('after posting new Class', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };

    return (
        <div className="w-full px-10">
            <Helmet>
                <title>Art Of Defense | Add Class</title>
            </Helmet>
            <h2 className='text-center text-4xl font-semibold pb-4'>Add A Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex my-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Name*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("name", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Karate</option>
                            <option>Taekwondo</option>
                            <option>Judo</option>
                            <option>Brazilian Jiu-Jitsu</option>
                            <option>Muay Thai</option>
                            <option>Kung Fu</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Name*</span>
                        </label>
                        <input type="text" value={user?.displayName}
                            {...register("insname", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Instructor Email*</span>
                        </label>
                        <input type="text" value={user?.email}
                            {...register("insemail", { required: true, maxLength: 30 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input type="number" defaultValue={40}
                            {...register("aseat", { required: true, maxLength: 10 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Total Students*</span>
                        </label>
                        <input type="number" value={0}
                            {...register("tstudent", { required: true, maxLength: 80 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='flex my-4 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} defaultValue={150} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Status*</span>
                        </label>
                        <input type="text" {...register("status", { required: true })} value={'pending'} className="input input-bordered w-full " />
                    </div>
                </div>

                <input className="btn btn-warning w-full lg:w-1/3 mx-auto text-orange-400 bg-slate-100 border-0 border-b-4 border-r-4 border-orange-400  form-control mt-8 " type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;