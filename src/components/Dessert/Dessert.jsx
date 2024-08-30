import Img1 from '../../assets/Dessert/IceCreme.png';
import Img2 from '../../assets/Dessert/FruitSalad.png';
import Img3 from '../../assets/Dessert/Curd.png';
import Img4 from '../../assets/Dessert/LavaCake.png';
import { FaStar } from "react-icons/fa";

const FoodsData = [
  {
    id: 1,
    img: Img1,
    title: 'IceCreme Bliss',
    aosDelay: '200',
    rating: '5',
  },
  {
    id: 2,
    img: Img2,
    title: 'FruitSalad Fusion',
    aosDelay: '400',
    rating: '5',
  },
  {
    id: 3,
    img: Img3,
    title: 'Curd Crispy',
    aosDelay: '600',
    rating: '5',
  },
  {
    id: 4,
    img: Img4,
    title: 'LavaCake Delight',
    aosDelay: '800',
    rating: '5',
  },
];

const TopFoods = () => {
  return (
    <div className="mb-12 mt-14">
      <div className="container">
        { /* Header section */ }
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Our Dessert Section</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Our Dessert</h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">Indulge in our irresistible dessert collection, where every treat is a sweet escape into delight. From creamy ice cream and rich lava cake to refreshing fruit salad and traditional curd, each dessert is crafted to satisfy your cravings and leave you with a smile. Experience the perfect ending to any meal with our delectable selection.</p>
        </div>
        { /* Body section */ }
        <div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
            { /* Card section */ }
            {
              FoodsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className='space-y-3' key={data.id}>
                  <div className='flex flex-col items-center'>
                    <img src={data.img} alt={data.title} className='h-[220px] w-full object-cover rounded' />
                    <div className='text-center'>
                      <h3 className='text-lg font-semibold'>{data.title}</h3>
                      <div className='flex items-center justify-center gap-1 mt-1'>
                        <FaStar className='text-yellow-400' />
                        <span>{data.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          { /* View all deals */ }
          <div 
            data-aos="fade-up"
            data-aos-delay="1000"
            className='flex justify-center'>
            <button className='px-4 py-2 mt-10 text-center text-white rounded-full cursor-pointer bg-primary hover:scale-105'>View All Deals</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFoods;
