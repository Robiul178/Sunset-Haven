
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6";
import { FiSquare } from "react-icons/fi";
import { Link } from "react-router-dom";


const ShowEstates = ({ estates }) => {

    const { id, image, estate_title, description, price, area, location, bedrooms, bathrooms } = estates;

    return (
        <div>
            <div className="card border mr-14 hover:bg-purple-700 hover:text-white">
                <figure className="px-10 pt-10">
                    <img src={image} alt="#" className="rounded-xl w-[300px] h-[300px]" />
                </figure>
                <div className="card-body">
                    <span className="flex gap-3">
                        <FaLocationDot />  <p>{location}</p>
                    </span>
                    <h2 className="card-title text-2xl">{estate_title}</h2>
                    <div className="flex justify-between border p-4">
                        <span className="flex gap-2">
                            <FaBed />
                            {bedrooms} bedrooms
                        </span>
                        <span className="flex gap-2">
                            <FaBath />
                            {bathrooms} bathrooms
                        </span>
                        <span className="flex gap-2">
                            <FiSquare />
                            {area}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <h2 className="font-semibold">{price}</h2>
                        <Link
                            to={`/estateDetails/${id}`}

                        >
                            <button className="border p-4 hover:bg-white hover:text-black">View Properties</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowEstates;