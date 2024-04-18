import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import slide1 from '../../../assets/slide1.jpeg'
import slide2 from '../../../assets/slide2.jpeg'
import slide3 from '../../../assets/slide3.jpeg'



const Banner = () => {

    return (
        <div>
            <section className='animate__animated animate__fadeInLeft'>
                <div>
                    <div className="carousel w-full max-h-[1200px]">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={slide1} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[57%]">
                                <a href="#slide3" className="btn btn-outline text-white"><FaArrowLeft className='md:w-28 md:text-xl'></FaArrowLeft></a>
                                <div>
                                    <h2 className='md:text-7xl font-bold text-white'>Create the Building <br /> You Want Here</h2>
                                    <p className='md:text-xl font-semibold text-white md:mt-4'>Builty is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Start Consulting <FaArrowRight></FaArrowRight></button>
                                </div>
                                <a href="#slide2" className="btn btn-outline text-blue-950"><FaArrowRight className='md:w-28 text-xl'></FaArrowRight></a>
                            </div>
                        </div>

                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={slide2} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-outline text-white"><FaArrowLeft className='md:w-28 md:text-xl'></FaArrowLeft></a>
                                <div className='text-blue-950'>
                                    <h2 className='md:text-7xl font-bold '>Create the Building <br /> You Want Here</h2>
                                    <p className='md:text-2xl font-semibold md:mt-4'>Builty is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Start Consulting <FaArrowRight></FaArrowRight></button>
                                </div>
                                <a href="#slide3" className="btn btn-outline text-white"><FaArrowRight className='md:w-28 md:text-xl'></FaArrowRight></a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={slide3} className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-outline text-blue-950"><FaArrowLeft className='md:w-28 md:text-xl'></FaArrowLeft></a>
                                <div className='text-blue-950'>
                                    <h2 className='md:text-7xl font-bold '>Create the Building <br /> You Want Here</h2>
                                    <p className='md:text-2xl font-semibold md:mt-4'>Builty is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Start Consulting <FaArrowRight></FaArrowRight></button>
                                </div>
                                <a href="#slide1" className="btn btn-outline text-blue-950"><FaArrowRight className='md:w-28 md:text-xl'></FaArrowRight></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Banner;