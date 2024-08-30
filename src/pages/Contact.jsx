import { useState } from 'react';
import BannerImage from '../assets/Contact/Banner.jpg'; 
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import OurTeam from '../components/OurTeam/OurTeam'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    // You can handle form submission here, such as sending the data to a server
  };

  return (
    <>
    <div className="container px-4 mx-auto my-10">
      <div className="grid items-center max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        {/* Left Side - Contact Form */}
        <div
         data-aos="fade-up"
        className="p-8 bg-white rounded-lg shadow-lg data:bg-slate-900 dark:bg-gray-800">
          <h1 className="mb-6 text-3xl font-bold text-center dark:text-white">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="block w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        {/* Right Side - Banner Image */}
        <div
         data-aos="fade-up"
        className=''>
        <div className="">
          <img
            src={BannerImage}
            alt="Contact Banner"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className='mt-5' > 
          <p className='text-xl'>Have questions or need assistance? Reach out to us through our contact form, and we`ll get back to you promptly. We`re here to help with any inquiries or feedback you may have!</p>
        </div>
        <div className='mt-10 text-3xl cursor-pointer'>
          <button>
          <IoCall className='mx-5' />
          </button>
          <button>
          <MdEmail className='mx-5' />
          </button>
          <button>
          <IoLogoWhatsapp className='mx-5' />
          </button>
        </div>
        </div>
      </div>
    </div>
    <OurTeam />
    </>
    
  );
};

export default ContactUs;
