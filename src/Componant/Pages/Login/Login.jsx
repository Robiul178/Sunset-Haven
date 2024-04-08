// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-center">Login here</h2>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
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
            <div className="">
                <button className="btn btn-outline btn-info">Info</button>
                <button className="btn btn-outline btn-success">Success</button>
                <button className="btn btn-outline btn-warning">Warning</button>
                <button className="btn btn-outline btn-error">Error</button>
            </div>
        </div>
    );
};

export default Login;