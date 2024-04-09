import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');

    const handleUserForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
            .then(result => {
                setSuccess('User Create SuccessFully')
                console.log(result.user)
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    };
    console.log('registerUser', registerUser)


    return (
        <div>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-center">Registration here</h2>
                <form onSubmit={handleUserForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Registration</button>
                    </div>
                    <div className="text-center">
                        <p>If you already have an account. <Link to='/login' className="text-blue-700 underline">
                            Please login here
                        </Link></p>
                    </div>
                    <div>
                        {success}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;