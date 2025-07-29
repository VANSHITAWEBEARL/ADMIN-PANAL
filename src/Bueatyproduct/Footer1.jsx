import { useState } from 'react';
import footerimage from '../assets/footer.png'; // Ensure the image path is correct
import footerbg from '../assets/back-footer.png'; // Ensure the image path is correct

export default function Footer1() {
  const [email, setEmail] = useState('');
  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };
  return (
    <footer className="  text-white ">
      <div className=" p-10 h-auto flex items-center justify-center" style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-15 mx-40">
          {/* Contact Us */}
          <div className='p-3 flex flex-col gap-1'>
            <p className=" !uppercase !text-base font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Contact us</p>
            <p className="text-gray-300 text-sm mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque eros. Nullam malesuada erat</p>
            <div className="mb-2 text-sm  "><i className="fa-solid text-xs fa-location-dot me-2"></i> Address: <span className="text-gray-400 text-sm ml-1">8901 Marmora Road, Glasgow D04 89 GR, New York</span></div>
            <div className="mb-2 text-sm "><i className="fa text-xs fa-phone me-2" /> <span className="font-semibold">Telephone:</span> <span className="text-gray-400 text-sm ml-1">(+1) 866-540-3229</span></div>
            <div className="mb-2 text-sm "><i className="fa fa-envelope mr-2" /> <span className="font-semibold">Email:</span> <span className="text-gray-400 text-sm ml-1"><a href="mailto:sales@yoursite.com" className="!no-underline !text-gray-400">sales@yoursite.com</a></span></div>
          </div>
          {/* Recent Posts */}
          <div className='p-3 flex flex-col gap-2 justify-center items-center'>
            <p className=" !uppercase !text-base font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our recent posts</p>
            
              <div className="flex items-center  pb-2">
                <img
                  src="https://demo.themeftc.com/ordo/wp-content/uploads/2018/11/blog4-FILEminimizer.jpg"
                  alt="Brand Whitening"
                  className="w-16 h-12 object-cover rounded mr-3 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-50 hover:shadow-lg"
                />
                <div>
                  <p className="text-[#999] text-sm mb-0 hover:text-[#FE9995]" style={{ fontFamily: 'Playfair Display, serif' }}>Brand Whitening</p>
                  <span className="text-white">January 6, 2025</span>
                </div>
              </div>
              <div className="flex items-center pb-2">
                <img src="https://demo.themeftc.com/ordo/wp-content/uploads/2018/11/blog1-FILEminimizer.jpg" alt="Dolor sit amet" className="w-16 h-12 object-cover rounded mr-3  transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-50 hover:shadow-lg" />
                <div>
                  <p className="text-[#999] text-sm mb-0 hover:text-[#FE9995]" style={{ fontFamily: 'Playfair Display, serif' }}>Dolor sit amet</p>
                  <span className="text-white">January 6, 2025</span>
                </div>
              </div>
              <div className="flex items-center  pb-2 ">
                <img src="https://demo.themeftc.com/ordo/wp-content/uploads/2018/11/blog2-FILEminimizer.jpg" alt="Lorem ipsum dolor" className="w-16 h-12 object-cover rounded mr-3  transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-50 hover:shadow-lg" />
                <div>
                  <p className="text-[#999] text-sm mb-0 hover:text-[#FE9995] " style={{ fontFamily: 'Playfair Display, serif' }}>Lorem ipsum dolor</p>
                  <span className="text-white">January 6, 2025</span>
                </div>
             
            </div>
          </div>
          {/* Newsletter */}
          <div className='p-3'>
            <p className="!uppercase !text-base font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Our Newsletter</p>
            <p className="text-gray-300 text-sm pe-3 mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam</p>
            <form className="flex flex-col gap-2" onSubmit={e => { e.preventDefault(); handleSubscribe(); }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email..." className="px-4 py-2 !rounded-full bg-gray-800 text-white focus:outline-none" required />
              <button type="submit" className="text-left flex px-4 py-2 !rounded-full bg-white text-gray-500  font-normal hover:bg-[#FE9995] transition">Subscribe</button>
            </form>
          </div>
          {/* Instagram */}
          <div className='p-3'>
            <h4 className="!uppercase !text-base font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Photo Instagram</h4>
            <p className="text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam</p>
            <div className="grid grid-cols-3 gap-2">
              <a href="https://instagram.com/instagram" target="_blank" rel="noopener noreferrer"><img src="https://demo.themeftc.com/ordo/wp-content/uploads/2020/01/11-2-150x150.jpg" alt="instagram" className="rounded-lg w-20 h-20" /></a>
              <a href="https://instagram.com/instagram" target="_blank" rel="noopener noreferrer"><img src="https://demo.themeftc.com/ordo/wp-content/uploads/2020/01/11-4-150x150.jpg" alt="instagram" className="rounded-lg w-20 h-20" /></a>
              <a href="https://instagram.com/instagram" target="_blank" rel="noopener noreferrer"><img src="https://demo.themeftc.com/ordo/wp-content/uploads/2020/01/11-6.jpg" alt="instagram" className="rounded-lg w-20 h-20" /></a>
            </div>
          </div>
        </div>


      </div>
      {/* Footer Bottom */}
      <div
        className="w-full h-15 bg-[#141414] flex flex-col md:flex-row items-center justify-around"
        style={{
          backgroundImage: `url(${footerimage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >

        <span className="text-gray-200 text-sm">Copyright © 2025 by <span className="text-blue-400">ThemeFTC</span>. All rights reserved.</span>
        <div className="w-full md:w-1/2 flex items-center justify-end px-6 py-4">
          <img src="https://demo.themeftc.com/ordo/wp-content/uploads/2020/10/payment.png" alt="Payments" className="h-6" />
        </div>

      </div>
    </footer>
  );
}