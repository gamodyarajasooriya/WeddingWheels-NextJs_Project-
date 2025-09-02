import React from 'react';
import { Search, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wedding Car Search Section */}
      <section className="bg-gradient-to-r from-burgundy-700 to-burgundy-800 p-6 rounded-lg mx-6 my-8 flex flex-wrap gap-4 justify-between items-end shadow-xl">
        {/* Wedding Venue */}
        <div className="flex flex-col min-w-[200px]">
          <label className="text-ivory font-medium mb-2 text-sm">Wedding Venue</label>
          <div className="relative">
            <input
              type="text"
              placeholder="e.g., Colombo, Kandy, Galle"
              className="pl-10 pr-3 py-3 rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-burgundy-600 w-full text-charcoal"
              style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-4 h-4" />
          </div>
        </div>

        {/* Wedding Date */}
        <div className="flex flex-col min-w-[180px]">
          <label className="text-ivory font-medium mb-2 text-sm">Wedding Date</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="date"
                defaultValue="2025-12-15"
                className="pl-10 pr-3 py-3 rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-burgundy-600 w-full text-charcoal"
                style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-4 h-4" />
            </div>
            <input
              type="time"
              defaultValue="09:00"
              className="px-3 py-3 rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-burgundy-600 text-charcoal min-w-[80px]"
              style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
            />
          </div>
        </div>

        {/* Number of Passengers */}
        <div className="flex flex-col min-w-[150px]">
          <label className="text-ivory font-medium mb-2 text-sm">Passengers</label>
          <select 
            className="px-3 py-3 rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-burgundy-600 text-charcoal"
            style={{ border: '1px solid rgba(0, 0, 0, 0.34)' }}
          >
            <option>2-4 People</option>
            <option>5-8 People</option>
            <option>9-15 People</option>
            <option>16+ People</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-burgundy-600 text-ivory font-semibold px-8 py-3 rounded-md hover:bg-burgundy-700 transition-colors duration-200 min-w-[140px] h-fit shadow-lg">
          Find Wedding Cars
        </button>
      </section>

      {/* Hero Section */}
      <section className="bg-ivory py-12 px-6 mx-6 my-8 rounded-lg relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-8 left-8 text-6xl">🌺</div>
          <div className="absolute top-16 right-12 text-4xl">🏵️</div>
          <div className="absolute bottom-12 left-16 text-5xl">🌸</div>
          <div className="absolute bottom-8 right-8 text-6xl">🪷</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-9xl font-bold text-burgundy-700 mb-2">WEDDING CARS</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">FOR YOUR SPECIAL DAY</h2>
          <p className="text-lg text-charcoal mb-8">Making Your Dream Wedding Journey Memorable in Sri Lanka</p>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Luxury wedding cars in Sri Lanka" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Choose Your Wedding Car Section */}
      <section className="py-12 px-6 mx-6 my-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Choose Your Perfect <span className="text-burgundy-600">Wedding</span> Car
          </h2>
          <p className="text-center text-charcoal text-lg mb-12">
            From traditional elegance to modern luxury - we have the perfect ride for your special day
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Classic Elegance Card */}
            <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-96 group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Classic Wedding Car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal bg-opacity-30"></div>
              <div className="absolute bottom-6 left-6 text-ivory z-10">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Classic Elegance</h3>
                <p className="text-lg mb-4 drop-shadow-lg">Vintage & Traditional Cars</p>
                <button className="border-2 border-ivory text-ivory px-6 py-2 rounded-full hover:bg-ivory hover:text-burgundy-800 transition-colors">
                  View Collection
                </button>
              </div>
            </div>

            {/* Modern Luxury Card */}
            <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-96 group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury Wedding Car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal bg-opacity-30"></div>
              <div className="absolute bottom-6 left-6 text-ivory z-10">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Modern Luxury</h3>
                <p className="text-lg mb-4 drop-shadow-lg">Premium Vehicles</p>
                <button className="border-2 border-ivory text-ivory px-6 py-2 rounded-full hover:bg-ivory hover:text-burgundy-800 transition-colors">
                  View Collection
                </button>
              </div>
            </div>

            {/* Bridal Party Card */}
            <div className="relative rounded-2xl overflow-hidden bg-cover bg-center h-96 group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Wedding Party Transportation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal bg-opacity-30"></div>
              <div className="absolute bottom-6 left-6 text-ivory z-10">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Bridal Party</h3>
                <p className="text-lg mb-4 drop-shadow-lg">Group Transportation</p>
                <button className="border-2 border-ivory text-ivory px-6 py-2 rounded-full hover:bg-ivory hover:text-burgundy-800 transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 px-6 mx-6 my-8 relative">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Beautiful Sri Lankan wedding couple" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Trusted by <span className="text-burgundy-600">Happy</span> Sri Lankan <span className="text-charcoal">Couples</span>
          </h2>
          <p className="text-center text-charcoal text-lg mb-12">
            "Here's what our newlyweds say about their wedding day experience."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Priya & Kasun Review */}
            <div className="bg-ivory rounded-2xl p-6 shadow-lg border-t-4 border-burgundy-600">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Priya & Kasun" 
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-center">Priya & Kasun</h3>
                <p className="text-sm text-charcoal">Colombo Wedding</p>
              </div>
              <div className="mb-6">
                <span className="text-burgundy-600 text-2xl">"</span>
                <p className="text-charcoal text-center px-2">
                  The vintage car was beautifully decorated and the driver was so professional. Made our poruwa ceremony arrival perfect!
                </p>
                <span className="text-burgundy-600 text-2xl float-right">"</span>
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-burgundy-600 text-xl">★</span>
                ))}
              </div>
            </div>

            {/* Nimali & Rohan Review */}
            <div className="bg-ivory rounded-2xl p-6 shadow-lg border-t-4 border-charcoal">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0acce6979b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Nimali & Rohan" 
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-center">Nimali & Rohan</h3>
                <p className="text-sm text-charcoal">Kandy Wedding</p>
              </div>
              <div className="mb-6">
                <span className="text-burgundy-600 text-2xl">"</span>
                <p className="text-charcoal text-center px-2">
                  Excellent service from Colombo to Kandy. The car was spotless and arrived exactly on time. Highly recommend!
                </p>
                <span className="text-burgundy-600 text-2xl float-right">"</span>
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-burgundy-600 text-xl">★</span>
                ))}
              </div>
            </div>

            {/* Saman & Chathurika Review */}
            <div className="bg-ivory rounded-2xl p-6 shadow-lg border-t-4 border-burgundy-600">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Saman & Chathurika" 
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-center">Saman & Chathurika</h3>
                <p className="text-sm text-charcoal">Galle Wedding</p>
              </div>
              <div className="mb-6">
                <span className="text-burgundy-600 text-2xl">"</span>
                <p className="text-charcoal text-center px-2">
                  The luxury car package was worth every rupee. Our families were impressed and we felt like royalty!
                </p>
                <span className="text-burgundy-600 text-2xl float-right">"</span>
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-burgundy-600 text-xl">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-ivory py-12 px-6 mx-6 my-8 rounded-lg relative overflow-hidden">
        {/* Sri Lankan Pattern Decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-8 left-8 text-6xl">🏺</div>
          <div className="absolute top-16 right-12 text-4xl">🪔</div>
          <div className="absolute bottom-12 left-16 text-5xl">🕉️</div>
          <div className="absolute bottom-8 right-8 text-6xl">🌺</div>
          <div className="absolute top-1/2 left-1/4 text-4xl">🪷</div>
          <div className="absolute top-1/3 right-1/4 text-5xl">🎭</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-burgundy-700 mb-2">LUXURY WEDDING</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-4">CAR RENTALS</h2>
          <p className="text-xl text-charcoal mb-2">Sri Lanka's Premier Wedding Transportation</p>
          <p className="text-lg text-charcoal mb-8">From Colombo to Kandy, Galle to Jaffna - Island-wide Service</p>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Luxury wedding cars decorated for Sri Lankan wedding" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 rounded-lg border-4 border-burgundy-600 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 mx-6 my-8 bg-gradient-to-r from-burgundy-600 to-charcoal rounded-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-ivory">
            Why Choose <span className="text-ivory">Ceylon Wedding Cars</span>?
          </h2>
          <p className="text-center text-ivory text-lg mb-12">
            We understand Sri Lankan wedding traditions and make your special day unforgettable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
            <div className="text-center text-ivory">
              <div className="w-20 h-20 mx-auto mb-4 bg-ivory rounded-full flex items-center justify-center">
                <span className="text-3xl text-burgundy-800">🚗</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Island-wide Fleet</h3>
              <p className="text-sm text-ivory">From vintage classics to modern luxury cars</p>
            </div>
            
            <div className="text-center text-ivory">
              <div className="w-20 h-20 mx-auto mb-4 bg-ivory rounded-full flex items-center justify-center">
                <span className="text-3xl text-burgundy-800">🎋</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Traditional Decoration</h3>
              <p className="text-sm text-ivory">Beautiful Sri Lankan wedding decorations included</p>
            </div>
            
            <div className="text-center text-ivory">
              <div className="w-20 h-20 mx-auto mb-4 bg-ivory rounded-full flex items-center justify-center">
                <span className="text-3xl text-burgundy-800">👨‍💼</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Professional Drivers</h3>
              <p className="text-sm text-ivory">Experienced, well-dressed chauffeurs</p>
            </div>
            
            <div className="text-center text-ivory">
              <div className="w-20 h-20 mx-auto mb-4 bg-ivory rounded-full flex items-center justify-center">
                <span className="text-3xl text-burgundy-800">💰</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Affordable Packages</h3>
              <p className="text-sm text-ivory">Competitive rates across Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lankan Wedding Locations Section */}
      <section className="py-12 px-6 mx-6 my-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            We Serve <span className="text-burgundy-600">All</span> of <span className="text-charcoal">Sri Lanka</span>
          </h2>
          <p className="text-center text-charcoal text-lg mb-12">
            From the cultural heart of Kandy to the coastal beauty of Galle
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-burgundy-600">
              <h3 className="font-bold text-lg text-charcoal">Colombo</h3>
              <p className="text-sm text-charcoal">Commercial Capital</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-charcoal">
              <h3 className="font-bold text-lg text-charcoal">Kandy</h3>
              <p className="text-sm text-charcoal">Cultural Capital</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-burgundy-600">
              <h3 className="font-bold text-lg text-charcoal">Galle</h3>
              <p className="text-sm text-charcoal">Southern Province</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-charcoal">
              <h3 className="font-bold text-lg text-charcoal">Negombo</h3>
              <p className="text-sm text-charcoal">Western Province</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-burgundy-600">
              <h3 className="font-bold text-lg text-charcoal">Jaffna</h3>
              <p className="text-sm text-charcoal">Northern Province</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-charcoal">
              <h3 className="font-bold text-lg text-charcoal">Anuradhapura</h3>
              <p className="text-sm text-charcoal">Ancient City</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-burgundy-600">
              <h3 className="font-bold text-lg text-charcoal">Nuwara Eliya</h3>
              <p className="text-sm text-charcoal">Hill Country</p>
            </div>
            <div className="bg-ivory p-6 rounded-lg shadow-md border-l-4 border-charcoal">
              <h3 className="font-bold text-lg text-charcoal">Trincomalee</h3>
              <p className="text-sm text-charcoal">Eastern Province</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Custom Tailwind CSS colors (to be added in tailwind.config.js)
const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        burgundy: {
          600: '#4A2C2A',
          700: '#3D2422',
          800: '#311C1A',
        },
        ivory: '#F8F1E9',
        charcoal: '#333333',
      },
    },
  },
};