import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaCartPlus } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const {isAdmin} = false;
    // const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'User LogOut Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/classes">Classes</NavLink></li>
        <li><NavLink to="/teacher">Instructors</NavLink></li>
        {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> : 
            <li><Link to="/dashboard/userhome">Dashboard</Link></li>
        }

        <Link to="/dashboard/mycart">
            <button className="btn btn-outline btn-warning gap-2">
                <FaCartPlus></FaCartPlus>
                <div className="badge badge-warning">+{10 || 0}</div>
            </button>
        </Link>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 w-11/12 mx-auto bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <a className="btn btn-ghost normal-case text-sm lg:text-xl">Art Of Defense</a>
                        <p className='ps-5 text-xs font-semibold'>Online martial art school</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                <button onClick={handleLogOut} className='btn btn-warning btn-outline  normal-case text-base'><span className='text-white'>Log Out</span></button>
                            </div>

                        </> : <> <NavLink to="/login"><button className='btn btn-warning btn-outline  normal-case text-base'><span className='text-white'>Login</span></button></NavLink> </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;