import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { updateUserProfile, setReload } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleUpdateProfile = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photoURL');

        updateUserProfile(name, photoURL)
            .then(() => {
                setReload(true)
                toast('Update Profile');
                navigate(location?.state ? location.state : '/');

            })
    }



    return (
        <div>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-center">Registration here</h2>
                <form onSubmit={handleUpdateProfile} className="card-body">
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
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>

                    <div>
                        <ToastContainer></ToastContainer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;