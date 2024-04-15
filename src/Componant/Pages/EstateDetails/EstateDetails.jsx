import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";


const EstateDetails = () => {
    const { data } = useContext(AuthContext);
    const { id } = useParams();
    const intId = parseInt(id);

    const property = data?.find(p => p.id === intId);

    const { status, image, estate_title, description, price, area, location, bedrooms, bathrooms } = property;


    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default EstateDetails;