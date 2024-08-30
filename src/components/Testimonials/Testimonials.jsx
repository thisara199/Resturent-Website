
import Slider from 'react-slick';
import Img1 from '../../assets/Testimonials/Image1.png';
import Img2 from '../../assets/Testimonials/Image2.png';
import Img3 from '../../assets/Testimonials/Image3.png';
import Img4 from '../../assets/Testimonials/Image4.png';
import Img5 from '../../assets/Testimonials/Image5.png';
import Img6 from '../../assets/Testimonials/Image6.png';

const TestimonialsData = [
  { id: 1, img: Img1, name: 'John Doe', text: 'The food at Resto was absolutely delicious! The flavors were vibrant and the presentation was perfect. Highly recommend!' },
  { id: 2, img: Img2, name: 'James R', text: 'A fantastic dining experience! The service was attentive, and every dish was a culinary delight. I’ll definitely be back.' },
  { id: 3, img: Img3, name: 'Emily T.', text: 'Resto exceeded my expectations. The atmosphere was cozy, and the menu had a great variety. Everything was top-notch.' },
  { id: 4, img: Img4, name: 'Michael B', text: 'I had a wonderful meal at Resto. The quality of the ingredients and the creativity in the dishes made for an unforgettable experience.' },
  { id: 5, img: Img5, name: 'Olivia W', text: 'Exceptional service and mouthwatering food. Resto is now my go-to spot for a great meal. Can’t wait to try more from the menu!' },
  { id: 6, img: Img6, name: 'David S.', text: 'Resto offers a perfect blend of fantastic food and a warm atmosphere. It’s a place where every meal feels special. Highly recommended!' },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">Hear from our satisfied diners about their exceptional experiences at Resto. Discover why they love our food and service!</p>
        </div>
        {/* card section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div data-aos="zoom-in" key={data.id} className='my-6 '> 
                <div className='relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl dark:bg-gray-800 bg-primary/10'>
                  <div className='mb-4'>
                    <img src={data.img} alt={data.name} className='w-20 h-20 rounded-full' />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-400'>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                    </div>
                  </div>
                  <p className='absolute top-0 right-0 font-serif text-black/20 text-9xl dark:text-white/90'>,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
