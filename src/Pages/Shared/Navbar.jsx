import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaCartPlus, FaMoon } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import useSelected from '../../hooks/useSelected';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [classes] = useSelected();

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

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
        <li><NavLink to="/classes">Classes</NavLink></li>
        <li><NavLink to="/instructors">Instructors</NavLink></li>
        {
            user ? <li><Link to="/dashboard">Dashboard</Link></li> : ''
        }

        {
            user ? <NavLink to="/dashboard/myselected">
                <button className="btn btn-outline btn-warning btn-sm gap-2">
                    <FaCartPlus></FaCartPlus>
                    <div className="badge badge-warning">+{classes?.length || 0}</div>
                </button>
            </NavLink> : ''

        }
    </>

    return (
        <>
            <div className="navbar mx-auto bg-slate-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu z-10 menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div>
                        <Link to='/'><a className="btn btn-ghost normal-case text-sm lg:text-xl">Art Of Defense</a></Link>
                        <p className='ps-5 text-xs font-semibold'>Online martial art school</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='tooltip tooltip-left mx-2 justify-center items-center flex' data-tip='Theme'>
                        <label className="swap swap-rotate">
                            <input onClick={toggleTheme} type="checkbox" />
                            <div className="swap-on bg-white text-black rounded-md py-1 text-lg px-2"><FaMoon></FaMoon></div>
                            <div className="swap-off bg-black text-white rounded-md py-1 text-lg px-2"><FaMoon></FaMoon></div>
                        </label>
                    </div>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                    <button><label className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full" >
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label></button>
                                </div>
                                <ul tabIndex={0} className="mt-3 py-5 z-10 shadow-xl menu menu-sm dropdown-content  rounded-box bg-slate-900 w-40">
                                    <button onClick={handleLogOut} className='btn btn-sm w-9/12 mx-auto btn-outline border-0 border-b-4 border-r-4 normal-case border-orange-400'><span className='text-white'>Log Out</span></button>
                                </ul>
                            </div>
                            : <> <NavLink to="/login"><button className='btn bg-slate-700 btn-outline border-0 border-b-4 border-r-4 normal-case border-orange-400'><span className='text-orange-400'>Login</span></button></NavLink> </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;