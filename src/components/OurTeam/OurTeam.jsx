import Img1 from '../../assets/OurTeam/Image1.png';
import Img2 from '../../assets/OurTeam/Image2.png';
import Img3 from '../../assets/OurTeam/Image3.png';
import Img4 from '../../assets/OurTeam/Image6.png';


const FoodsData = [
  {
    id: 1,
    img: Img1,
    title: 'Danny Torrist',
    aosDelay: '200',
    job: 'Founder And CEO',
  },
  {
    id: 2,
    img: Img2,
    title: 'Lee yen',
    aosDelay: '400',
    job: 'Executive Chef ',
  },
  {
    id: 3,
    img: Img3,
    title:  'Jeff Hardy',
    aosDelay: '600',
    job: 'Resturent Manager',
  },
  {
    id: 4,
    img: Img4,
    title: 'Lexi Triks',
    aosDelay: '800',
    job: 'Marketing Manager',
  },
]
const TopFoods = () => {
  return (
   <div className="mb-12 mt-14">
     <div className="container">
      { /* Header section */ }
      <div className="text-center mb-10 max-w[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">Resto Team members</p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">Our Team</h1>
        <p data-aos="fade-up" className="text-sm text-gray-400">Our team at Resto is a family of passionate individuals who share a love for great food and exceptional service. From our talented chefs who craft each dish with precision, to our friendly staff who ensure every guest feels welcome, we`re dedicated to creating a memorable dining experience. Together, we bring our diverse skills and shared vision to the table, making Resto a place where culinary excellence meets warm hospitality.</p>
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
                <h4 className='font-bold'>{data.job}</h4>
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
