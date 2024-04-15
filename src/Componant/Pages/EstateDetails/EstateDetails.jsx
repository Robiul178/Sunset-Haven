import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";


const EstateDetails = () => {
    const { data } = useContext(AuthContext);
    const { id } = useParams();
    const intId = parseInt(id);

    const property = data?.find(p => p.id === intId);


    console.log(data, property)


    return (
        <div>
            <h2>EstateDetails: {property.id}</h2>
            <h2>EstateDetails: {property.estate_title}</h2>
            <h2>EstateDetails: {property.price}</h2>
        </div>
    );
};

export default EstateDetails;