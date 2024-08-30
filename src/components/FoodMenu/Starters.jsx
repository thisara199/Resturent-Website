import Img1 from '../../assets/FoodMenu/Starters/GarlicBread.png';
import Img2 from '../../assets/FoodMenu/Starters/Calamari.png';
import Img3 from '../../assets/FoodMenu/Starters/ChickenSatay.png';
import Img4 from '../../assets/FoodMenu/Starters/SpinachArtichokeDip.png';
import Img5 from '../../assets/FoodMenu/Starters/ShrimpCocktail.png';
import Img6 from '../../assets/FoodMenu/Starters/TruffleMacandCheeseBites.png';
import Img7 from '../../assets/FoodMenu/Starters/ThaiSpringRolls.png';
import Img8 from '../../assets/FoodMenu/Starters/SpicyTunaTartare.png';

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      name: 'GarlicBread', 
      price: '$8.99',
      image: Img1,
      aosDelay: '0',
    },
    {
      id: 2,
      name: 'Calamari', 
      price: '$9.99',
      image: Img2,
      aosDelay: '200',
    },
    {
      id: 3,
      name: 'Chicken Satay',
      price: '$7.99',
      image: Img3,
      aosDelay: '400',
    },
    {
      id: 4,
      name: 'Spinach Artichoke Dip',
      price: '$4.99',
      image: Img4,
      aosDelay: '600',
    },
    {
      id: 5,
      name: 'ShrimpCocktail',
      price: '$15.99',
      image: Img5,
      aosDelay: '800',
    },
    {
      id: 6,
      name: 'Truffle Mac and Cheese Bites',
      price: '$12.99',
      image: Img6,
      aosDelay: '1000',
    },
    {
      id: 7,
      name: 'Thai Spring Rolls ',
      price: '$25.99',
      image: Img7,
      aosDelay: '1200',
    },
    {
      id: 8,
      name: 'Spicy Tuna Tartare',
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
      <h1 data-aos="fade-up" className="text-center text-primary">Begin Your Culinary Adventure</h1>
      <h1 data-aos="fade-up" className="mb-6 text-4xl font-bold text-center text-gray-800">
      Starters</h1>
      <p data-aos="fade-up" className="mb-10 text-lg text-center text-gray-600">
      Our starters are crafted to tantalize your taste buds and set the stage for an unforgettable dining experience. Each dish is a perfect blend of fresh ingredients and exquisite flavors, designed to whet your appetite and leave you eager for the courses to come. Whether you prefer something light and refreshing or rich and savory, our selection of starters offers something for every palate.
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
