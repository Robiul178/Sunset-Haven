import service from '../../../assets/service.png'

const Service = () => {
    return (
        <div className="text-center py-12">
            <div>
                <h2 className="text-xl text-blue-600">SERVICE</h2>
                <h2 className="text-5xl font-bold">What We Offer For You</h2>
            </div>
            <div className="md:flex justify-between py-12 px-12">
                <div  >
                    <div className=' md:h-12 max-w-[800px] p-4'>
                        <div tabIndex={0} className="collapse collapse-plus border-b border-black p-4 mb-6">
                            <div className="collapse-title text-4xl text-start font-medium">
                                <p >Luxury Apartment</p>
                            </div>
                            <div className="collapse-content text-start">
                                <p>They are about people and their dreams.
                                    That's why we take the time to listen
                                    to your unique needs and aspirations
                                    That's why we take aspirations in the
                                    world wide services.
                                </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border-b border-black p-4 mb-6">
                            <div className="collapse-title text-4xl text-start font-medium">
                                <p >Architecture Design</p>
                            </div>
                            <div className="collapse-content text-start">
                                <p>They are about people and their dreams.
                                    That's why we take the time to listen
                                    to your unique needs and aspirations
                                    That's why we take aspirations in the
                                    world wide services.
                                </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border-b border-black p-4 mb-6">
                            <div className="collapse-title text-4xl text-start font-medium">
                                <p >Extra strong security</p>
                            </div>
                            <div className="collapse-content text-start">
                                <p>They are about people and their dreams.
                                    That's why we take the time to listen
                                    to your unique needs and aspirations
                                    That's why we take aspirations in the
                                    world wide services.
                                </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border-b border-black p-4">
                            <div className="collapse-title text-4xl text-start font-medium">
                                <p >Home Remodeling</p>
                            </div>
                            <div className="collapse-content text-start">
                                <p>They are about people and their dreams.
                                    That's why we take the time to listen
                                    to your unique needs and aspirations
                                    That's why we take aspirations in the
                                    world wide services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <img src={service} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Service;