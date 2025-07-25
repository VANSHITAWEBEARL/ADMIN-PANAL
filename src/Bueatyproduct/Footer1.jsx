import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer1() {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(true);

  const handleSubscribe = () => {
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const recentPosts = [
    {
      id: 1,
      title: 'Brand Whitening',
      date: 'January 6, 2025',
      gradient: 'from-pink-400 to-red-400'
    },
    {
      id: 2,
      title: 'Dolor sit amet',
      date: 'January 6, 2025',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor',
      date: 'January 6, 2025',
      gradient: 'from-green-400 to-teal-400'
    }
  ];

  const instagramPosts = [
    'from-purple-400 to-purple-600',
    'from-pink-400 to-red-400',
    'from-blue-400 to-cyan-400',
    'from-green-400 to-teal-400',
    'from-pink-400 to-yellow-400',
    'from-teal-200 to-pink-200'
  ];

  const paymentMethods = ['VISA', 'MC', 'PYPL', 'AMEX', 'DISC', 'SEPA'];

  return (
    <div className="bg-gray-800 text-white">
      {/* Top gradient border */}
      <div className="h-5 bg-gradient-to-r from-white/10 via-white/5 to-white/10"></div>
      
      <footer className="px-5 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            
            {/* Contact Us Section */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold uppercase tracking-wide mb-5">Contact Us</h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque eros. Nullam malesuada erat
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Address:</span> 8901 Marmora Road, Glasgow D04 89 GR, New York
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Telephone:</span> (+1) 866-540-3229
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Email:</span> sales@yoursite.com
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts Section */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold uppercase tracking-wide mb-5">Our Recent Posts</h3>
              <div className="space-y-5">
                {recentPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`flex gap-4 pb-4 ${index !== recentPosts.length - 1 ? 'border-b border-gray-600' : ''}`}
                  >
                    <div className={`w-15 h-15 rounded bg-gradient-to-br ${post.gradient} flex-shrink-0`}></div>
                    <div>
                      <h4 className="text-white text-sm mb-2 leading-tight">{post.title}</h4>
                      <div className="text-gray-400 text-xs">{post.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold uppercase tracking-wide mb-5">Our Newsletter</h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-4 py-4 rounded-full bg-gray-600 text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  onClick={handleSubscribe}
                  className="w-full px-4 py-4 rounded-full bg-white text-gray-800 font-bold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Instagram Section */}
            <div className="space-y-5">
              <h3 className="text-lg font-bold uppercase tracking-wide mb-5">Photo Instagram</h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
              </p>
              <div className="grid grid-cols-3 gap-2">
                {instagramPosts.map((gradient, index) => (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg bg-gradient-to-br ${gradient} cursor-pointer hover:scale-105 transition-transform duration-300`}
                    onClick={() => console.log('Opening Instagram post...')}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-600 pt-8 flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              Copyright © 2025 by ThemeTFC. All rights reserved.
            </div>
            <div className="flex gap-2">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="w-10 h-6 bg-white rounded flex items-center justify-center text-xs font-bold text-gray-800"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </footer>
    </div>
  );
}