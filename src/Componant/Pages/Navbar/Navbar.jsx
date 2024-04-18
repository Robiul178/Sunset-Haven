import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BsPhone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(() => {
                toast('Sign-out successful')
            }).catch((error) => {
                toast(error)
            })
    }
    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border  border-green-500 " : ""
                }
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/estates"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border  border-green-500 " : ""
                }
            >
                ESTATES
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border  border-green-500 " : ""
                }
            >
                ABOUT
            </NavLink>
        </li>
        {/* <li>
            <NavLink
                to="/update"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-b-2 border-t-red-500 border-b-blue-900" : ""
                }
            >
                Update Profile
            </NavLink>
        </li> */}
    </>


    return (

        <nav>
            <ToastContainer></ToastContainer>
            <div className="border-b border-black">
                <div className="flex justify-between pt-2 px-12">
                    <div>
                        <span className="flex gap-2">
                            <FaLocationDot className="text-xl" />
                            <p className="md:pr-12">Alison Street,10090,Canada</p>
                            <BsPhone className="mt-1"></BsPhone>
                            <p >997-889-0987</p>
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            {
                                user ?
                                    <>
                                        <div className="flex gap-3">
                                            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                                <div className="avatar">
                                                    <div className="w-10 relative rounded-full ring-0">
                                                        <img src={user?.photoURL} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={handleLogOut} className="mt-2">Log Out</button>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>
                                            <button >Login \ Register</button>
                                        </Link></>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar bg-white px-10 pt-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {links}
                        </ul>
                    </div>
                    <div>
                        <Link to='/'>
                            <p className="text-3xl font-serif font-bold"> Sunset Haven</p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">

                    {
                        user ?
                            <NavLink
                                to="/myprofile"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-t-2 border-b-2 border-t-red-500 border-b-blue-900" : ""
                                }
                            >
                                My Profile
                            </NavLink>
                            :
                            <Link to='/login'>
                                <button className="p-2 border font-bold hover:bg-purple-500 hover:text-white">My Profile</button>
                            </Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;