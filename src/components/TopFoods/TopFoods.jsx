import Img1 from '../../assets/TopFoods/Biriyani.png';
import Img2 from '../../assets/TopFoods/Salad.png';
import Img3 from '../../assets/TopFoods/BBQ.png';
import Img4 from '../../assets/TopFoods/Pasta.png';
import { FaStar } from "react-icons/fa";

const FoodsData = [
  {
    id: 1,
    img: Img1,
    title: 'Spiced Perfection: Flavorful Biriyani',
    aosDelay: '200',
    rating: '5',
  },
  {
    id: 2,
    img: Img2,
    title: 'Fresh & Crisp: Garden Salad Bliss',
    aosDelay: '400',
    rating: '5',
  },
  {
    id: 3,
    img: Img3,
    title:  'Smoky Goodness: BBQ Favorites',
    aosDelay: '600',
    rating: '5',
  },
  {
    id: 4,
    img: Img4,
    title: 'Classic Pasta Delight',
    aosDelay: '800',
    rating: '5',
  },
]
const TopFoods = () => {
  return (
   <div className="mb-12 mt-14">
     <div className="container">
      { /* Header section */ }
      <div className="text-center mb-10 max-w[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">Top Selling foods for you</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Top Foods</h1>
        <p data-aos="fade-up" className="text-sm text-gray-400">Discover our top-selling delights, where every bite is a celebration of flavor and quality. From aromatic biriyani and decadent pastries to savory BBQ and gourmet pizza, each dish is crafted to perfection, promising a memorable taste experience with every visit.</p>
      </div>
      { /* Body section */ }
      <div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
      { /* card section */ }
      {
        FoodsData.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          className='space-y-3' key={data.id}>
              <img src={data.img} alt=""
              className='h-[220px] w-[220px] object-cover rounded '
              />
              <div>
                <h3 className='font-semibold'>{data.title}</h3>
                <div className='flex items-center gap-1'>
                  <FaStar className='text-yellow-400' />
                  <span>{data.rating}</span>
                </div>
              </div>
         </div>
        ))
      }
        </div>
      </div>
    </div>
   </div>
  )
}

export default TopFoods
