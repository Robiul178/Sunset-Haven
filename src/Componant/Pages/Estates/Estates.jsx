import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ShowEstates from "../ShowEstates/ShowEstates";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";



const Estates = () => {

    const { data } = useContext(AuthContext);

    return (
        <section>
            <Helmet>
                <title>Sunset Haven | Estates</title>
            </Helmet>
            <div data-aos='zoom-in' data-aos-delay='500'>
                <div className="px-12">
                    <h2 className="text-xl text-purple-600 pb-4">PROPERTIES</h2>
                    <h2 className="text-4xl font-bold mb-6">
                        Explore Our Latest & <br /> Featured Properties
                    </h2>
                </div>
                <div className="pb-10">
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
        </section>
    );
};

export default Estates;