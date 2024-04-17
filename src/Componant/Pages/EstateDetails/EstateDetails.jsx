import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


const EstateDetails = () => {
    const { data } = useContext(AuthContext);
    const { id } = useParams();
    const intId = parseInt(id);

    const property = data?.find(p => p.id === intId);

    const { status, image, segment_name, estate_title, description, facilities, price, area, location, bedrooms, bathrooms } = property;


    return (
        <div>
            <div className="px-10 py-12">
                <div className="flex gap-6 mb-4">
                    <div className="w-[900px]">
                        <img src={image} alt="" data-aos='fade-right' data-aos-duration='1000' className="w-full h-screen" />
                    </div>
                    <div>
                        <h2 data-aos='fade-left' data-aos-duration='1000' className="text-3xl font-semibold mb-2">{estate_title}</h2>
                        <div data-aos='fade-left' data-aos-duration='1000' className="flex justify-between border p-3">
                            <h2 className="text-lg mb-2">Status: <span className="font-semibold">{status}</span></h2>
                            <p>Segment: {segment_name}</p>
                        </div>
                        <p data-aos='fade-left' data-aos-duration='1000' className="flex mt-2"> <FaLocationDot className="mt-1 text-xl" />
                            {location}
                        </p>
                        <span data-aos='fade-left' data-aos-duration='1000' className="flex justify-between my-4 border p-3">
                            <p>Bedrooms: {bedrooms}</p>
                            <p>Bathrooms: {bathrooms}</p>
                        </span>
                        <span>
                            {
                                facilities.map((f, i) =>
                                    <li data-aos='fade-left' data-aos-duration='1000' key={i}>{f}</li>
                                )
                            }
                        </span>
                        <p data-aos='fade-left' data-aos-duration='1000' className="mt-4"> <span className="font-semibold">Price:</span> {price}</p>
                        <p data-aos='fade-left' data-aos-duration='1000' className="mt-4"> <span className="font-semibold">Area:</span> {area}</p>
                    </div>
                </div>
                <p data-aos='fade-left' data-aos-duration='1000'>
                    <span className="font-bold">Description : </span>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default EstateDetails;