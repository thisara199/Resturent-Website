import Img1 from '../../assets/FoodMenu/MainCourse/RibeyeSteak.png';
import Img2 from '../../assets/FoodMenu/MainCourse/SeafoodPaella.png';
import Img3 from '../../assets/FoodMenu/MainCourse/Caprese.png';
import Img4 from '../../assets/FoodMenu/MainCourse/GrilledSalmon.png';
import Img5 from '../../assets/FoodMenu/MainCourse/PastaPrimavera.png';
import Img6 from '../../assets/FoodMenu/MainCourse/BeefWellington.png';
import Img7 from '../../assets/FoodMenu/MainCourse/ChickenAlfredo.png';
import Img8 from '../../assets/FoodMenu/MainCourse/Vegetable .png';

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Ribeye Steak', 
      price: '$8.99',
      image: Img1,
      aosDelay: '0',
    },
    {
      id: 2,
      name: 'Seafood Paella', 
      price: '$9.99',
      image: Img2,
      aosDelay: '200',
    },
    {
      id: 3,
      name: 'Caprese Salad',
      price: '$7.99',
      image: Img3,
      aosDelay: '400',
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      price: '$4.99',
      image: Img4,
      aosDelay: '600',
    },
    {
      id: 5,
      name: 'Pasta Primavera',
      price: '$15.99',
      image: Img5,
      aosDelay: '800',
    },
    {
      id: 6,
      name: 'Beef Wellington',
      price: '$12.99',
      image: Img6,
      aosDelay: '1000',
    },
    {
      id: 7,
      name: 'Chicken Alfredo',
      price: '$25.99',
      image: Img7,
      aosDelay: '1200',
    },
    {
      id: 8,
      name: 'Vegetable Salad',
      price: '$14.99',
      image: Img8,
      aosDelay: '1400',
    },
  ];

  const handleAddToCart = (item) => {
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="container px-4 mx-auto my-10">
      <h1 data-aos="fade-up" className="text-center text-primary">A Feast for the Senses</h1>
      <h1 data-aos="fade-up" className="mb-6 text-4xl font-bold text-center text-gray-800">Main Courses</h1>
      <p data-aos="fade-up" className="mb-10 text-lg text-center text-gray-600">
      Dive into our main courses, where every dish is a celebration of bold flavors and culinary mastery. Our chefs have meticulously crafted each plate to offer a perfect balance of taste, texture, and aroma, ensuring a dining experience that is as satisfying as it is memorable. From hearty classics to innovative creations, our main courses are designed to please every palate, providing a rich and fulfilling centerpiece to your meal. Savor the art of fine dining with every bite.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <img src={item.image} alt={item.name} className="object-contain w-full mb-4 rounded-lg h-44 hover:scale-110" />
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{item.name}</h2>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="w-full px-4 py-2 mt-4 text-white rounded-lg bg-primary hover:bg-primary/90 focus:outline-none focus:ring-orange-600 focus:ring-offset-1 focus:scale-110"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
