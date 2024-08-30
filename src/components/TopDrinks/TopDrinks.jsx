import Img1 from '../../assets/TopDrinks/Image1.png';
import Img2 from '../../assets/TopDrinks/Image2.png';
import Img3 from '../../assets/TopDrinks/Image3.png';
import { FaStar } from "react-icons/fa";

const DrinksData = [
 {
  id: 1,
  img: Img1,
  title: 'Mojito',
  description: "A refreshing blend of mint, lime, and sparkling soda, perfectly balanced with just a hint of sweetness. Sip on this cool, zesty drink for a burst of flavor that revitalizes with every sip.",
 },
 {
  id: 2,
  img: Img2,
  title: 'Milkshake',
  description: "A creamy, dreamy delight that blends rich ice cream with your favorite flavors. Whether it's chocolate, vanilla, or strawberry, each sip is a smooth and indulgent treat that satisfies your sweet cravings.",
 },
 {
  id: 3,
  img: Img3,
  title: 'Iced Coffee',
  description: "Refreshingly bold and invigorating, our iced coffee is the perfect blend of robust coffee and cool comfort. It's the ideal pick-me-up, served chilled and smooth, to keep you energized and refreshed throughout the day.",
 },
]
const TopDrinks = () => {
  return (
    <div>
      <div className="container">
        { /* Header section */}
      <div className="text-left mb-28 ">
        <p data-aos="fade-up" className="text-sm text-primary">Top Selling Drinks</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Top Drinks</h1>
        <p data-aos="fade-up" className="text-sm text-gray-400">Quench your thirst with our signature drinks that bring refreshment to a whole new level. Sip on our zesty mojitos, creamy milkshakes, and bold iced coffee, each crafted to satisfy your cravings. For a burst of natural sweetness, enjoy our freshly squeezed fruit juices, or opt for classic colas and soft drinks for a familiar, fizzy delight. Whatever your preference, our drink menu has something to perfectly complement your meal.</p>
      </div>
        { /* Body section */}
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {
          DrinksData.map((data) => (
           <div data-aos="zoom-in" key={data.id} className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
             { /* image section */ }
             <div className='h-[100px]'>
              <img src={data.img} alt=""  className='max-w-[160px] block mx-auto transform -translate-y-20 group-hover:scale-125 duration-300 drop-shadow-md' />
             </div>
             { /* text section */ }
             <div className='p-4 text-center'>
             { /* star rating */}
             <div className='flex items-center justify-center w-full gap-1'>
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
             </div>
             <h1 className='text-xl font-bold'>{data.title}</h1>
             <p className='text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2'>{data.description}</p>
                <button className='px-4 py-1 mt-4 text-white duration-300 rounded-full bg-primary hover:scale-105 group-hover:bg-white group-hover:text-primary' 
                //onClick={handleOrderPopup}
                >
                 Order Now
                </button>
             </div>
           </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopDrinks
