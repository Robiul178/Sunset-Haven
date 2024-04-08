import { Link, NavLink } from "react-router-dom";
import Logo from '../../../assets/logo.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setSuccess('Sign-out successful.')
            }).catch((error) => {
                setError(error)
            });
    }

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-b-2 border-t-red-500 border-b-blue-900" : ""
                }
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-t-2 border-b-2 border-t-red-500 border-b-blue-900" : ""
                }
            >
                ABOUT
            </NavLink>
        </li>
    </>


    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex">
                        <img
                            src={Logo}
                            alt=""
                            className="w-20" />
                        <Link to='/' className="text-4xl font-semibold mt-4 text-blue-900">
                            BuildCraft
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-black">
                            {/* <img src="" /> */}
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <div>
                        {
                            user ?
                                <button onClick={handleLogOut} className="btn btn-outline">Log Out</button>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-outline">LogIn</button>
                                </Link>

                        }
                    </div>
                    {/* <div>
                        {success}
                        {error}
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;