import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import slide1 from '../../../assets/slide1.jpeg'
import slide2 from '../../../assets/slide2.jpeg'
import slide3 from '../../../assets/slide3.jpeg'
import Service from '../Service/Service';
import About from '../About/About';

const Home = () => {
    return (
        <div >
            <div className="carousel w-full max-h-[1200px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[57%]">
                        <a href="#slide3" className="btn btn-outline text-white"><FaArrowLeft className='w-28 text-2xl'></FaArrowLeft></a>
                        <div>
                            <h2 className='text-7xl font-bold text-white'>Create the Building <br /> You Want Here</h2>
                            <p className='text-2xl font-semibold text-white mt-4'>Builty is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                            <button className='btn btn-outline text-white mt-4 text-xl'>Start Consulting <FaArrowRight></FaArrowRight></button>
                        </div>
                        <a href="#slide2" className="btn btn-outline text-blue-950"><FaArrowRight className='w-28 text-2xl'></FaArrowRight></a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline text-white"><FaArrowLeft className='w-28 text-2xl'></FaArrowLeft></a>
                        <div className='text-blue-950'>
                            <h2 className='text-7xl font-bold '>Create the Building <br /> You Want Here</h2>
                            <p className='text-2xl font-semibold mt-4'>Builty is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                            <button className='btn btn-accent mt-4 text-xl'>Start Consulting <FaArrowRight></FaArrowRight></button>
                        </div>
                        <a href="#slide3" className="btn btn-outline text-white"><FaArrowRight className='w-28 text-2xl'></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline text-blue-950"><FaArrowLeft className='w-28 text-2xl'></FaArrowLeft></a>
                        <div className='text-blue-950'>
                            <h2 className='text-7xl font-bold '>Create the Building <br /> You Want Here</h2>
                            <p className='text-2xl font-semibold mt-4'>Builty is a construction and architecture environmentally most responsible for any kinds of themes.</p>
                            <button className='btn btn-accent  mt-4 text-xl'>Start Consulting <FaArrowRight></FaArrowRight></button>
                        </div>
                        <a href="#slide1" className="btn btn-outline text-blue-950"><FaArrowRight className='w-28 text-2xl'></FaArrowRight></a>
                    </div>
                </div>
            </div>
            <Service></Service>
            <About></About>
        </div>

    );
};

export default Home;