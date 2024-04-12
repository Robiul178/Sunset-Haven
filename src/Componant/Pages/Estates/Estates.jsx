import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ShowEstates from "../ShowEstates/ShowEstates";
import Marquee from "react-fast-marquee";



const Estates = () => {

    const { data } = useContext(AuthContext);

    return (
        <div>
            <div className="px-12">
                <h2 className="text-2xl text-purple-600 pb-4">PROPERTIES</h2>
                <h2 className="text-5xl font-bold mb-6">
                    Explore Our Latest & <br /> Featured Properties
                </h2>
            </div>
            <div>
                <Marquee pauseOnHover={Boolean}>
                    {
                        data?.map(estates =>
                            <ShowEstates
                                key={estates.id}
                                estates={estates}
                            ></ShowEstates>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Estates;