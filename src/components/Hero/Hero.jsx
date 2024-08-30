import Image1 from '../../assets/Hero/Image1.png';
import Image2 from '../../assets/Hero/Image2.png';
import Image3 from '../../assets/Hero/Image3.png';
import Image4 from '../../assets/Hero/Image4.png';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    image: Image1,
    title: 'Rise & Spice Biriyani Bliss',
    description: "Experience the magic of authentic spices and tender rice, perfectly crafted to elevate your dining adventure. Dive into a world of rich flavors with every bite."
  },
  {
    id: 2,
    image: Image2,
    title: 'Pastry Perfection Flaky, Sweet, and Unforgettable',
    description: "Indulge in the art of fine pastries, where buttery layers meet delicate sweetness. Each creation is a masterpiece, ready to satisfy your cravings for something extraordinary."
  },
  {
    id: 3,
    image: Image3,
    title: 'Smoking BBQ Savor the Sizzle',
    description: "Get fired up for a taste of BBQ heaven, where juicy meats and smoky flavors come together. Enjoy a mouthwatering experience that’s grilled to perfection."
  },
  {
    id: 4,
    image: Image4,
    title: 'Pizza Passion A Slice Above the Rest',
    description: "Bite into a world of cheesy goodness, where every slice is crafted with love and the freshest ingredients. Our pizza is more than just food – it's a way of life."
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* Background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-s-3xl rotate-45 -z-9'></div>
      {/* Hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* Text content section */}
                <div className='relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pt-0 sm:text-left sm:order-1'>
                  <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className='text-5xl font-bold sm:text-6xl lg:text-7xl'>{data.title}</h1>
                  <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className='text-sm '>{data.description}</p>
                  <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  >
                    <button className='px-4 py-2 ml-5 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className='order-1 sm:order-2'>
                  <div 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className='relative z-10'>
                    <img className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-100 object-contain mx-auto mt-2' src={data.image} alt={data.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
