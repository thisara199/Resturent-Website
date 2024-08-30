import Hero from '../components/Hero/Hero.jsx'
import TopFoods from '../components/TopFoods/TopFoods.jsx'
import TopDrinks from '../components/TopDrinks/TopDrinks.jsx'
import Banner from '../components/Banner/Banner.jsx'
import Subscribe from '../components/Subscribe/Subscribe.jsx'
import Dessert from '../components/Dessert/Dessert.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <TopFoods />
      <TopDrinks />
      <Banner />
      <Subscribe />
      <Dessert />
      <Testimonials />
    </div>
  )
}

export default Home
