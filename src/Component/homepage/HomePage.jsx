import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../homepage/images/carousal1.avif';
import img2 from '../homepage/images/carousal2.avif';
import img3 from '../homepage/images/carousal3.webp';
import SearchBar from './SearchBar';
import DestinationComponent from './DestinationComponent';
import ExclusiveOffers from './offer/ExclusiveOffers';
import Footer from '../homepage/Footer';

const HomePage = () => {
    return (
        <>
            <div style={{ position: 'relative', width: '1300px', margin: '0 auto', paddingTop: '10px' }}>
                {/* Carousel */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                            style={{ height: '500px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ paddingTop: "20px" }}>
                <SearchBar />
            </div>

            <div style={{paddingTop:"50px"}}>
                <DestinationComponent />
            </div>
            <div>
                <ExclusiveOffers/>
            </div>
            <div>
                <Footer/>
            </div>

        </>
    );
};

export default HomePage;
