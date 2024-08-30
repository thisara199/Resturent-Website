import Img1 from '../../assets/FoodMenu/Drinks/ClassicMojito.png';
import Img2 from '../../assets/FoodMenu/Drinks/Margarita.png';
import Img3 from '../../assets/FoodMenu/Drinks/Cosmopolitan.png';
import Img4 from '../../assets/FoodMenu/Drinks/FreshLemonade.png';
import Img5 from '../../assets/FoodMenu/Drinks/IcedTea.png';
import Img6 from '../../assets/FoodMenu/Drinks/SparklingWater.png';
import Img7 from '../../assets/FoodMenu/Drinks/FruitSmoothie.png';
import Img8 from '../../assets/FoodMenu/Drinks/Falooda.png';

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Classic Mojito', 
      price: '$8.99',
      image: Img1,
      aosDelay: '0',
    },
    {
      id: 2,
      name: 'Margarita', 
      price: '$9.99',
      image: Img2,
      aosDelay: '200',
    },
    {
      id: 3,
      name: 'Cosmopolitan',
      price: '$7.99',
      image: Img3,
      aosDelay: '400',
    },
    {
      id: 4,
      name: 'Fresh Lemonade',
      price: '$4.99',
      image: Img4,
      aosDelay: '600',
    },
    {
      id: 5,
      name: 'Iced Tea',
      price: '$15.99',
      image: Img5,
      aosDelay: '800',
    },
    {
      id: 6,
      name: 'Sparkling Water',
      price: '$12.99',
      image: Img6,
      aosDelay: '1000',
    },
    {
      id: 7,
      name: 'Fruit Smoothie',
      price: '$25.99',
      image: Img7,
      aosDelay: '1200',
    },
    {
      id: 8,
      name: 'Falooda',
      price: '$14.99',
      image: Img8,
      aosDelay: '1400',
    },
  ];

  const handleAddToCart = (item) => {
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="container px-4 mx-auto my-20">
      <h1 data-aos="fade-up" className="text-center text-primary">Begin Your Culinary Refresh and Revitalize</h1>
      <h1 data-aos="fade-up" className="mb-6 text-4xl font-bold text-center text-gray-800">
      Drinks and beverages</h1>
      <p data-aos="fade-up" className="mb-10 text-lg text-center text-gray-600">
      Discover our carefully curated selection of drinks, designed to complement your meal and enhance your dining experience. From refreshing cocktails and fine wines to artisanal non-alcoholic beverages, each drink is crafted to provide a perfect balance of flavor and refreshment. Our beverage menu features a diverse range of options to suit every taste, ensuring that every sip adds to the enjoyment of your culinary journey. Elevate your dining experience with our exceptional drink offerings, crafted to quench your thirst and delight your senses.
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
