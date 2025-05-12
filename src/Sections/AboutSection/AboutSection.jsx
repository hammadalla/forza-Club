// InfoSection.jsx
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../AboutSection/Aboutsection.css'
import { FaAward, FaGlobe, FaUser, FaUserCog } from "react-icons/fa";
import aboutImg from '../../assets/GP6A0799-scaled.jpg'
import aboutImg2 from '../../assets/OIP.jpg'
import { useEffect } from 'react';
const InfoSection = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <>
            <section className='bg-about overflow-hidden'>
                <div className="container  py-5">
                    <div className="row rev   align-items-center">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 className='action mb-4'>About Us</h2>
                                <p className='fw-bold mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 mb-4 mb-md-0"
                            data-aos="fade-right"
                        >
                            <div className="AboutImg">
                                <img
                                    src={aboutImg}
                                    alt="IT Guidance"
                                />
                            </div>
                        </div>

                        <div
                            className="col-md-6"
                            data-aos="fade-left"
                        >
                            <h2 className="fw-bold">
                                Lorem ipsum dolor sit amet <span className="text-primary">Guidance</span>
                            </h2>
                            <p className="text-muted mb-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem repudiandae non sunt culpa. Eveniet distinctio ullam, rem omnis nulla non, illum dignissimos porro nam, repellat totam asperiores quidem et.
                            </p>
                            <p className="text-muted">
                                We stay at the forefront of technology trends and emerging innovations to bring our clients cutting-edge solutions...
                            </p>
                            <div className="row mt-4">
                                <div className="col-6" data-aos="zoom-in">
                                    <div className="">
                                        <div className="d-flex">
                                            <FaUser size={24} className="mb-2"  color='#F3B213' />
                                            <h5 className='px-2'>clients</h5>
                                        </div>
                                        <h3 className="fw-lighter border-top" style={{fontSize: "50px"}}>1.5k</h3>
                                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, modi laboriosam</p>
                                    </div>
                                </div>
                                <div className="col-6" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="">
                                        <div className="d-flex">
                                            <FaAward size={24} className="mb-2" color='#F3B213' />
                                            <h5 className='px-2'>Total Awards</h5>
                                        </div>
                                        <h3 className="fw-lighter border-top" style={{fontSize: "50px"}}>49+</h3>
                                    </div>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, modi laboriosam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row rev   align-items-center">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 className='action mb-4'>Our Vision</h2>
                                <p className='fw-bold mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
                        </div>
                        <div
                            className="col-md-6 mb-4 mb-md-0"
                            data-aos="fade-right"
                        >
                            <div className="AboutImg">
                                <img
                                    src={aboutImg2}
                                    alt="IT Guidance"
                                />
                            </div>
                        </div>

                        <div
                            className="col-md-6"
                            data-aos="fade-left"
                        >
                            <h2 className="fw-bold">
                                Lorem ipsum dolor sit amet <span className="text-primary">Guidance</span>
                            </h2>
                            <p className="text-muted mb-2">
                                Through the academy, the aim is to give players the understanding and abilities to progress their football to the highest level along with keeping the fun and enjoyment aspect all youth footballers should feel.
                            </p>
                            <p className="text-muted">
                                We stay at the forefront of technology trends and emerging innovations to bring our clients cutting-edge solutions...
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
};

export default InfoSection;
