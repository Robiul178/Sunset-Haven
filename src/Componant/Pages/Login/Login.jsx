import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { logInUser, singInUsingGoogle, gitHubLogIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleUserLogInForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        logInUser(email, password)
            .then(result => {
                setSuccess('LogIn SuccessFully')
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    };

    const handleGoogleSingIn = e => {
        e.preventDefault()
        singInUsingGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(location?.state ? location.state : '/')
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const handleGitHubLogIn = e => {
        e.preventDefault()
        gitHubLogIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }


    console.log(location, navigate)

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-center">Login here</h2>
            <form onSubmit={handleUserLogInForm} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="text-center">
                    <p>If you does not have an account. <Link to='/register' className="text-blue-700 underline">
                        Please registration here
                    </Link></p>
                </div>
            </form>
            <div className="text-center">
                <button onClick={handleGoogleSingIn} className="btn btn-outline btn-info me-4">
                    <FcGoogle className="text-3xl"></FcGoogle>
                    <p className="text-lg"> SingUp with Google</p>
                </button>
                <button onClick={handleGitHubLogIn} className="btn btn-outline btn-success">
                    <FaGithub className="text-3xl"></FaGithub>
                    <p className="text-lg">SingUp with GitHub</p>
                </button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Login;