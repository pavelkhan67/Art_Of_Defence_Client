import React, { useContext } from 'react';
import { FaCartPlus, FaCheckSquare, FaEnvelope, FaHome, FaNewspaper, FaPlusSquare, FaTasks, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useSelected from '../../hooks/useSelected';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useEnrolled from '../../hooks/useEnrolled';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

const Dashboard = () => {
    const [classes] = useSelected();
    const [enrolled] = useEnrolled();
    const location = useLocation();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <motion.div className="drawer lg:drawer-open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Helmet>
                <title>Art Of Defense | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center mt-10">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button mb-5 lg:hidden">Open drawer</label>
                {
                    location.pathname === '/dashboard' ? <p className='text-2xl font-bold'>Please Select a Route</p> : ''
                }
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-slate-600 text-white h-full">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageclass"><FaTasks></FaTasks> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage User</NavLink></li>
                        </> : isInstructor ? <>
                            <li><NavLink to="/dashboard/addclass"><FaPlusSquare></FaPlusSquare> Add Class</NavLink></li>
                            <li><NavLink to="/dashboard/myclass"><FaNewspaper></FaNewspaper> My Classes</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to="/dashboard/myselected"><FaCartPlus></FaCartPlus> My Selected Class<span className="badge bg-white text-black">+{classes?.length || 0}</span></NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/myenrolled"><FaCheckSquare></FaCheckSquare> My Enrolled Class<span className="badge bg-white text-black">{enrolled?.length || 0}</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet> Payment History</NavLink>
                                </li>

                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/classes"><FaNewspaper></FaNewspaper> Classes</NavLink></li>
                    <li><NavLink to="/instructors"><FaUsers></FaUsers> Instructors</NavLink></li>
                </ul>

            </div>
        </motion.div>
    );
};

export default Dashboard;