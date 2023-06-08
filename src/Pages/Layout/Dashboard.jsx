import React from 'react';
import { FaAddressBook, FaBars, FaBook, FaCalendar, FaCartPlus, FaEnvelope, FaHome, FaShoppingBag, FaStar, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useSelected from '../../hooks/useSelected';

const Dashboard = () => {
    const [classes] = useSelected();
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-warning text-base-content">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additem"> <FaUtensils></FaUtensils> Add A Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaCartPlus></FaCartPlus> My Cart <span className="badge bg-white text-black">+{classes?.length || 0}</span></NavLink>
                            </li>
                            <li><NavLink to="/dashboard/myreview"><FaStar></FaStar> Add Review</NavLink></li>
                            <li><NavLink to="/dashboard/mybookings"><FaBook></FaBook> My Bookings</NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaBars></FaBars> Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                    <li><NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;