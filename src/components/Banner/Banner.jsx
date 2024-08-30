import BannerImg from '../../assets/Banner/Banner.jpg';
import { FaShippingFast } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoMdRestaurant } from "react-icons/io";
import { GiClick } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2">
          { /* image section */ }
          <div data-aos="zoom-in">
            <img className='max-w-[500px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover md:mt-16 sm:mt-5' src={BannerImg} alt="" />
          </div>
          { /* text details section */ }
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl font-bold sm:text-4xl'>Get 20% Off Your Online Order! </h1>
            <p data-aos="fade-up" className='text-sm leading-5 tracking-wide text-gray-500'>Indulge in your favorite dishes from the comfort of your home and enjoy a 20% discount on your online order. Treat yourself to delicious meals at a fraction of the price <br /> —order now and savor the savings!</p>
            <div className='flex flex-col gap-4'>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <IoMdRestaurant className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 text-primary dark:bg-violet-400' />
                <p>Tasty Foods</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <FaShippingFast className='w-12 h-12 p-4 text-4xl bg-red-400 rounded-full shadow-sm text-primary dark:bg-red-500' />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <GiClick className='w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 text-primary dark:bg-violet-400' />
                <p>Easy Ordering</p>
              </div>
              <div data-aos="fade-up" className='flex items-center gap-4'>
                <IoFastFood className='w-12 h-12 p-4 text-4xl bg-red-400 rounded-full shadow-sm text-primary dark:bg-red-500' />
                <p>Cash on delevery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
