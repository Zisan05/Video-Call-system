import { useEffect, useState, useRef } from 'react';
import data from '../src/image.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function App() {
  const [imageNumber, setImageNumber] = useState(0);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

 
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

  // const goToNextImage = () => {
  //   const newIndex = (imageNumber + 1) % data.length;
  //   setImageNumber(newIndex);
  //   sliderRef.current.slickGoTo(newIndex);
  // };

  // // Handle next button click
  // const handleNext = () => {
  //   goToNextImage();
  // };

  // const handlePrev = () => {
  //   const newIndex = (imageNumber - 1 + data.length) % data.length;
  //   setImageNumber(newIndex);
  //   sliderRef.current.slickGoTo(newIndex);
  // };


  // useEffect(() => {
  //   const interval = setInterval(goToNextImage, 3000); // Change image every 3000ms (3 seconds)

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [imageNumber]);

  return (
    <div className="slider-container">
      <Slider  ref={slider => {
          sliderRef = slider;
        }}
        {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <img
              className='w-[1200px] h-[600px] mx-auto'
              src={item.url}
              alt=""
            />
            <button
              onClick={previous}
              className="bg-red-600 py-[10px] px-[40px] text-white font-bold relative bottom-[300px] left-[100px]"
            >
              Left
            </button>
            <button
              onClick={next}
              className="bg-red-600 py-[10px] px-[40px] text-white font-bold relative bottom-[300px] left-[950px]"
            >
              Right
            </button>
          </div>
        ))}
      </Slider>


      <div className='flex justify-center'>
        <Link to={"/videocallform"}><button className='bg-red-600 py-[10px] px-[40px] text-white mt-[50px] font-bold'>Go for video call </button></Link>
      </div>
    </div>
  );
}

export default App;
