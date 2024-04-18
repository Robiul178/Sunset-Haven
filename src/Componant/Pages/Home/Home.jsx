
import Service from '../Service/Service';
import About from '../About/About';
import Estates from '../Estates/Estates';
import 'animate.css';
import Banner from '../Banner/Banner';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Estates></Estates>
        </div>
    );
};

export default Home;