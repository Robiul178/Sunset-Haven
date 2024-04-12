import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ShowEstates from "../ShowEstates/ShowEstates";
import Marquee from "react-fast-marquee";



const Estates = () => {

    const { data } = useContext(AuthContext);

    return (
        <div className="py-24">
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
    );
};

export default Estates;