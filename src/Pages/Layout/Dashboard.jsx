import React from 'react';
import { FaBars,  FaCartPlus, FaCheckSquare, FaEnvelope, FaHome, FaNewspaper, FaPlusSquare, FaTasks, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useSelected from '../../hooks/useSelected';
// import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [classes] = useSelected();
    const isAdmin = false;
    const isIns = false;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-warning text-base-content h-full">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/manageclass"><FaTasks></FaTasks> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageuser"><FaUsers></FaUsers> Manage User</NavLink></li>
                        </> : isIns ? <>
                            <li><NavLink to="/dashboard/addclass"><FaPlusSquare></FaPlusSquare> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/myclass"><FaNewspaper></FaNewspaper> My Classes</NavLink></li>
                        </> :
                        <>
                            <li><NavLink to="/dashboard/myselected"><FaCartPlus></FaCartPlus> My Selected Class <span className="badge bg-white text-black">+{classes?.length || 0}</span></NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myenrolled"><FaCheckSquare></FaCheckSquare> My Enrolled Class</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment</NavLink></li>

                    </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/classes"><FaNewspaper></FaNewspaper> Classes</NavLink></li>
                    <li><NavLink to="/instructors"><FaUsers></FaUsers> Instructors</NavLink></li>
                    <li><NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;