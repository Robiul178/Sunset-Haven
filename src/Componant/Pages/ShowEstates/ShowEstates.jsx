import { BsMap } from "react-icons/bs";


const ShowEstates = ({ estates }) => {

    const { image, estate_title, description, price, area, location } = estates;

    return (
        <div>
            <div className="card border mr-14 hover:bg-purple-700 hover:text-white">

                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <span className="flex gap-3">
                        <BsMap></BsMap><p>{location}</p>
                    </span>
                    <h2 className="card-title text-2xl">{estate_title}</h2>
                    <span>

                    </span>
                    <div className="flex justify-between">
                        <h2>${price}</h2>
                        <button className="border p-4">View Properties</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowEstates;