// import image1 from '../assets/images/1.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
const { Carousel } = require("react-responsive-carousel");

function AdsCarousel() {
    return (
        <div>
            <Carousel showArrows={false} interval="5000" autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} >
                <div>
                    <img src="/images/1.png" alt="asd" />
                </div>
                <div>
                    <img src="/images/2.png" alt="b" />
                </div>
            </Carousel>
        </div>
    )
}

export default AdsCarousel;