import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Register = () => {
    const { createUser, setReload } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const handleUserForm = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast.warning('Password should be at least 6 character')
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Password at least one Uppercae')
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.alert('password At least one lowercase')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, { displayName: name, photoURL: photoURL }).then(() => {
                    setReload(true)
                });
                toast('User Create SuccessFully');
                navigate(location?.state ? location.state : '/')

            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    };


    return (
        <div data-aos="fade-down"
            data-aos-duration="1500"
        >
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
                        <ToastContainer></ToastContainer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;