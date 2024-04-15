
import about from '../../../assets/about.png'


const About = () => {
    return (
        <section>
            <div className="md:flex md:justify-evenly px-12 py-16">
                <div>
                    <img src={about} width={465} className='border' alt="" />
                </div>

                <div>
                    <h2 className="text-xl text-purple-600 mb-6">ABOUT US</h2>
                    <h2 className="text-4xl font-bold leading-12 mb-6 ">We Are Top Rated Real <br /> Estate Company <br /> Worldwide</h2>
                    <p className='text-xl'>Realco Real Estate Company we understand that real estate transactions are <br />
                        not just about properties they are about people and their dreams. That's why <br /> we take the time to listen to your unique needs and aspirations</p>
                    <div className="md:flex justify-between py-6">
                        <div className='mb-4'>
                            <h2 className='text-3xl font-bold mb-4'>Smart Home <br /> Architecture</h2>
                            <p>We working with your real estate dreams a reality</p>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold mb-4'>Reasonable Pricing Plan<br /> Architecture</h2>
                            <p>We working with your real estate dreams a reality</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 text-center">
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-title">Team Members</div>
                        <div className="stat-value">100</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Project Done</div>
                        <div className="stat-value">1500</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Happy Client</div>
                        <div className="stat-value">879</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Trusted Agents</div>
                        <div className="stat-value">120</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;