import MainCourse from '../components/FoodMenu/MainCourse.jsx'
import Starters from '../components/FoodMenu/Starters.jsx'
import Desserts from '../components/FoodMenu/Desserts.jsx'
import Drinks from '../components/FoodMenu/Drinks.jsx'
const Menu = () => {
  return (
    <div >
      <Starters />
      <Drinks />
       <MainCourse />
       <Desserts />
    </div>
  )
}

export default Menu
