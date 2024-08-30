import Banner from '../../assets/Subscribe/Banner.png';
import { useState } from 'react';

const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    alert('Subscribed successfully !');
    setSubscribed(true);
  };

  const BannerImg = {
    backgroundImage: `url(${Banner})`, // Use 'backgroundImage' for clarity
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  };

  return (
    <div
      data-aos="zoom-in"
      className='mb-2 text-white'
      style={BannerImg}
    >
      <div className='container py-10 backdrop-blur-sm'>
        <div className='max-w-xl mx-auto space-y-6'>
          <h1 className='text-2xl font-semibold text-center sm:text-left sm:text-4xl'>
            Get Notified About New Deals
          </h1>
          <div data-aos="fade-up" className='flex gap-4'>
            <input
              type='text'
              placeholder='Enter your email'
              className='w-full p-3 rounded-lg shadow-md'
            />
            <button
              onClick={handleSubscribe}
              className={` p-3 rounded-lg shadow-md ${subscribed ? 'bg-primary text-white hover:scale-105 ' : 'bg-gray-300 text-black'}`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
