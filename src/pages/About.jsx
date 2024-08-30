
import OurTeam from "../components/OurTeam/OurTeam";
const About = () => {
  return (
    <div className="container px-4 mx-auto my-10">

        <div>
          <div  data-aos="fade-up">
            <h1 className="text-3xl font-bold text-center lg:text-4xl">Welcome to Resto</h1>
            <p className="py-10 mx-auto text-center text-gray-400">Immerse yourself in an extraordinary dining experience where the rich traditions of culinary artistry meet the excitement of modern innovation. At our restaurant, every dish is a masterpiece, thoughtfully crafted with passion, creativity, and the finest ingredients. From the moment you walk through our doors, you`re invited to embark on a flavorful journey that delights the senses and warms the soul. Whether it`s a familiar favorite or a new culinary adventure, each bite is a celebration of our commitment to excellence and our love for bringing people together. Come savor the perfect blend of tradition and contemporary flair, where every meal is not just food, but an unforgettable experience.</p>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div  data-aos="fade-right">
              <h1 className="text-3xl font-semibold text-center">Our Story</h1>
              <p className="py-5 text-gray-400">Founded in [Year], [Restaurant Name] was born out of a love for [Cuisine Type] and a desire to create a dining experience that feels like home. From our humble beginnings to becoming a beloved part of the community, our journey has always been about sharing the joy of good food with great people.</p>
            </div>
            <div data-aos="fade-left">
              <h1 className="text-3xl font-semibold text-center">The Experience</h1>
              <p className="py-5 text-gray-400">At [Restaurant Name], we offer more than just a meal—we provide an experience. Whether you`re enjoying a quiet dinner, celebrating with friends, or simply savoring a moment alone, our inviting atmosphere, attentive service, and exceptional cuisine make every visit special.</p>
            </div>
          </div>
        </div>
      <OurTeam />
    </div>
  )
}

export default About
