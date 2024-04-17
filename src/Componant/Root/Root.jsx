import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;