import Logo from '../../assets/Website/Logo.png';
import banner from '../../assets/Footer/Banner.jpeg';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const BannerImg = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  {
    title: 'Home',
    link: "/"
  },
  {
    title: 'Menu',
    link: "/menu"
  },
  {
    title: 'About',
    link: "/about"
  },
  {
    title: 'Contact',
    link: "/contact"
  },
];


const Footer = () => {
  return (
    <div  style={BannerImg}
     className='mb-20 text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 pt-5 md:grid-cols-3 pv-44'>
          {/* company details */}
          <div data-aos="fade-up" className='px-4 py-8'>
            <h1 className='flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
              <img className='max-w-[150px]' src={Logo} alt="" />
              Resto.</h1>
            <p>Resto offers a delightful dining experience with its vibrant menu and exceptional service. Enjoy fresh, flavorful dishes in a cozy atmosphere that makes every meal special. Perfect for any occasion, Resto is where great food meets memorable moments.</p>
          </div>
          {/* Footer Links */}
          <div data-aos="fade-up" className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10'>
            <div>
              <div className='px-4 py-8'>
                <h1 className='mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map((link) => (
                      <li key={link.title} className='mb-3 text-justify cursor-pointer'>
                        <a href={link.link} className='text-gray-200 duration-300 hover:text-primary hover:translate-x-1'>{link.title}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='px-4 py-8'>
                <h1 className='mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
                Social media
                </h1>
                <div >
                  <div className='flex items-center gap-3 mt-6 '>
                    <a href="https://www.facebook.com" target="_blank">
                    <FaFacebookF className='text-3xl hover:text-primary' />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                    <FaInstagram className='text-3xl hover:text-primary'/>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutube className='text-3xl hover:text-primary'/>
                    </a>
                    <a href="https://x.com/?lang=en" target="_blank">
                    <FaXTwitter className='text-3xl hover:text-primary'/>
                    </a>
                  </div>
                </div>
              </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
