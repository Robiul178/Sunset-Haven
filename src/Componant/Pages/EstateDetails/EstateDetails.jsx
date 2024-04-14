// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    // const { data } = useContext(AuthContext);
    const data = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const property = data.find(p => p.id === intId);


    console.log(property)


    return (
        <div>
            <h2>EstateDetails: {property.id}</h2>
        </div>
    );
};

export default EstateDetails;