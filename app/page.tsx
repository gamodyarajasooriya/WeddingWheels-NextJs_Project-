import React from 'react';
import { Search, Calendar, Car, Flower2, UserRound, Wallet } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Navbar */}
      <Navbar />

      {/* Wedding Car Search Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #7D2027 0%, #5D1A1F 100%)', 
        padding: '12px', 
        borderRadius: '8px', 
        margin: '12px', 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '12px', 
        justifyContent: 'space-between', 
        alignItems: 'end',
        boxShadow: '0 4px 12px rgba(125, 32, 39, 0.25)'
      }}>
        {/* Pickup Location */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '220px' }}>
          <label style={{ color: '#F7E7CE', fontWeight: '600', marginBottom: '2px', fontSize: '14px' }}>Pickup Location</label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Enter pickup location"
              style={{
               paddingLeft: '48px',
                paddingRight: '16px',
                paddingTop: '14px',
                paddingBottom: '14px',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #F7E7CE',
                outline: 'none',
                width: '100%',
                color: '#4A4A4A',
                fontSize: '16px'
              }}
            />
            <Search style={{ 
              position: 'absolute', 
              left: '16px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#7D2027', 
              width: '20px', 
              height: '20px' 
            }} />
          </div>
        </div>

        {/* Pickup Date & Time */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '200px' }}>
          <label style={{ color: '#F7E7CE', fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Pickup Date & Time</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="date"
                defaultValue="2025-12-15"
                style={{
                  paddingLeft: '48px',
                  paddingRight: '16px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #F7E7CE',
                  outline: 'none',
                  width: '100%',
                  color: '#4A4A4A',
                  fontSize: '16px'
                }}
              />
              <Calendar style={{ 
                position: 'absolute', 
                left: '16px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#7D2027', 
                width: '20px', 
                height: '20px' 
              }} />
            </div>
            <input
              type="time"
              defaultValue="10:00"
              style={{
                padding: '14px 16px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #F7E7CE',
                outline: 'none',
                color: '#4A4A4A',
                minWidth: '100px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        {/* Drop-off Location */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '220px' }}>
          <label style={{ color: '#F7E7CE', fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Drop-off Location</label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Enter drop-off location"
              style={{
                paddingLeft: '48px',
                paddingRight: '16px',
                paddingTop: '14px',
                paddingBottom: '14px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #F7E7CE',
                outline: 'none',
                width: '100%',
                color: '#4A4A4A',
                fontSize: '16px'
              }}
            />
            <Search style={{ 
              position: 'absolute', 
              left: '16px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#7D2027', 
              width: '20px', 
              height: '20px' 
            }} />
          </div>
        </div>

        {/* Drop-off Date & Time */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '200px' }}>
          <label style={{ color: '#F7E7CE', fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Drop-off Date & Time</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                type="date"
                defaultValue="2025-12-15"
                style={{
                  paddingLeft: '48px',
                  paddingRight: '16px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #F7E7CE',
                  outline: 'none',
                  width: '100%',
                  color: '#4A4A4A',
                  fontSize: '16px'
                }}
              />
              <Calendar style={{ 
                position: 'absolute', 
                left: '16px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: '#7D2027', 
                width: '20px', 
                height: '20px' 
              }} />
            </div>
            <input
              type="time"
              defaultValue="10:00"
              style={{
                padding: '14px 16px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #F7E7CE',
                outline: 'none',
                color: '#4A4A4A',
                minWidth: '100px',
                fontSize: '16px'
              }}
            />
          </div>
        </div>

        {/* Car Type */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '220px' }}>
          <label style={{ color: '#F7E7CE', fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Car Type</label>
          <select 
            style={{
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #F7E7CE',
              outline: 'none',
              color: '#4A4A4A',
              fontSize: '16px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            <option value="">Select car type</option>
            <option value="luxury">Luxury Sedan</option>
            <option value="vintage">Vintage Car</option>
            <option value="premium">Premium SUV</option>
            <option value="sports">Sports Car</option>
            <option value="classic">Classic Car</option>
            <option value="limousine">Limousine</option>
          </select>
        </div>

        {/* Search Button */}
        <button style={{ 
          backgroundColor: '#4A4A4A', 
          color: '#FFFFFF', 
          fontWeight: '600', 
          padding: '10px 24px', 
          borderRadius: '8px', 
          border: 'none',
          cursor: 'pointer',
          minWidth: '160px', 
          height: 'fit-content',
          boxShadow: '0 4px 12px rgba(74, 74, 74, 0.3)',
          transition: 'all 0.3s ease',
          fontSize: '16px'
        }}>
          Find Wedding Cars
        </button>
      </section>

      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#F7E7CE', 
        paddingTop: '64px', 
        paddingBottom: '64px', 
        paddingLeft: '24px', 
        paddingRight: '24px', 
        margin: '24px', 
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 8rem)', 
            fontWeight: 'bold', 
            color: '#7D2027', 
            marginBottom: '16px',
            letterSpacing: '2px'
          }}>
            WEDDING CARS
          </h1>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 4vw, 3rem)', 
            fontWeight: 'bold', 
            color: '#4A4A4A', 
            marginBottom: '24px'
          }}>
            FOR YOUR SPECIAL DAY
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: '#4A4A4A', 
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px auto',
            lineHeight: '1.2'
          }}>
            Creating unforgettable wedding moments with Sri Lanka's finest luxury vehicles and professional service.
          </p>
          
          <div style={{ position: 'relative' }}>
            <img 
              src="https://cdn.pixabay.com/photo/2023/09/29/02/53/couple-8282778_1280.jpg" 
              alt="Elegant wedding cars in Sri Lanka" 
              style={{ 
                width: '100%', 
                maxWidth: '900px', 
                margin: '0 auto', 
                borderRadius: '12px', 
                boxShadow: '0 12px 40px rgba(125, 32, 39, 0.2)' 
              }}
            />
          </div>
        </div>
      </section>

      {/* Choose Your Wedding Car Section */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px', paddingLeft: '24px', paddingRight: '24px', margin: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '16px',
            color: '#4A4A4A'
          }}>
            Choose Your Perfect <span style={{ color: '#7D2027' }}>Wedding</span> Car
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#4A4A4A', 
            fontSize: '18px', 
            marginBottom: '64px',
            maxWidth: '700px',
            margin: '0 auto 64px auto',
            lineHeight: '1.6'
          }}>
            From timeless elegance to modern luxury - discover the perfect vehicle for your special day
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {/* Classic Elegance Card */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              height: '400px',
              boxShadow: '0 8px 24px rgba(125, 32, 39, 0.15)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Classic vintage wedding car" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: '0', 
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)' 
              }}></div>
              <div style={{ 
                position: 'absolute', 
                bottom: '24px', 
                left: '24px', 
                color: '#FFFFFF', 
                zIndex: 10 
              }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '8px' }}>Classic Elegance</h3>
                <p style={{ fontSize: '16px', marginBottom: '16px', opacity: '0.9' }}>Vintage & Traditional Cars</p>
                <button style={{ 
                  border: '2px solid #FFFFFF', 
                  backgroundColor: 'transparent',
                  color: '#FFFFFF', 
                  padding: '10px 24px', 
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}>
                  View Collection
                </button>
              </div>
            </div>

            {/* Modern Luxury Card */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              height: '400px',
              boxShadow: '0 8px 24px rgba(125, 32, 39, 0.15)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern luxury wedding car" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: '0', 
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)' 
              }}></div>
              <div style={{ 
                position: 'absolute', 
                bottom: '24px', 
                left: '24px', 
                color: '#FFFFFF', 
                zIndex: 10 
              }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '8px' }}>Modern Luxury</h3>
                <p style={{ fontSize: '16px', marginBottom: '16px', opacity: '0.9' }}>Premium Vehicles</p>
                <button style={{ 
                  border: '2px solid #FFFFFF', 
                  backgroundColor: 'transparent',
                  color: '#FFFFFF', 
                  padding: '10px 24px', 
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}>
                  View Collection
                </button>
              </div>
            </div>

            {/* Bridal Party Card */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              height: '400px',
              boxShadow: '0 8px 24px rgba(125, 32, 39, 0.15)'
            }}>
              <img 
                src="https://i.pinimg.com/1200x/3a/06/52/3a0652f7fd793d6d12c2332af179c630.jpg" 
                alt="Wedding party transportation vehicle" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: '0', 
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)' 
              }}></div>
              <div style={{ 
                position: 'absolute', 
                bottom: '24px', 
                left: '24px', 
                color: '#FFFFFF', 
                zIndex: 10 
              }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '8px' }}>Bridal Party</h3>
                <p style={{ fontSize: '16px', marginBottom: '16px', opacity: '0.9' }}>Group Transportation</p>
                <button style={{ 
                  border: '2px solid #FFFFFF', 
                  backgroundColor: 'transparent',
                  color: '#FFFFFF', 
                  padding: '10px 24px', 
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}>
                  View Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ 
        paddingTop: '64px', 
        paddingBottom: '64px', 
        paddingLeft: '24px', 
        paddingRight: '24px', 
        margin: '24px',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: '0', 
          borderRadius: '12px', 
          overflow: 'hidden'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Sri Lankan wedding couple" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.1' }}
          />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '16px',
            color: '#4A4A4A'
          }}>
            Trusted by <span style={{ color: '#7D2027' }}>Happy</span> Sri Lankan Couples
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#4A4A4A', 
            fontSize: '18px', 
            marginBottom: '64px',
            maxWidth: '600px',
            margin: '0 auto 64px auto',
            lineHeight: '1.6'
          }}>
            Here's what our newlyweds say about their wedding day experience.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Priya & Kasun Review */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '16px', 
              padding: '32px', 
              boxShadow: '0 8px 24px rgba(125, 32, 39, 0.1)', 
              borderTop: '4px solid #7D2027'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Priya & Kasun" 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }}
                />
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', color: '#4A4A4A' }}>Priya & Kasun</h3>
                <p style={{ fontSize: '14px', color: '#7D2027', fontWeight: '500' }}>Colombo Wedding</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ color: '#4A4A4A', textAlign: 'center', fontSize: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "The vintage car was beautifully decorated and the driver was so professional. Made our poruwa ceremony arrival perfect!"
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#7D2027', fontSize: '20px' }}>★</span>
                ))}
              </div>
            </div>

            {/* Nimali & Rohan Review */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '16px', 
              padding: '32px', 
              boxShadow: '0 8px 24px rgba(125, 32, 39, 0.1)', 
              borderTop: '4px solid #4A4A4A'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s" 
                  alt="Nimali & Rohan" 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }}
                />
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', color: '#4A4A4A' }}>Nimali & Rohan</h3>
                <p style={{ fontSize: '14px', color: '#7D2027', fontWeight: '500' }}>Kandy Wedding</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ color: '#4A4A4A', textAlign: 'center', fontSize: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "Excellent service from Colombo to Kandy. The car was spotless and arrived exactly on time. Highly recommend!"
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#7D2027', fontSize: '20px' }}>★</span>
                ))}
              </div>
            </div>

            {/* Saman & Chathurika Review */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '16px', 
              padding: '32px', 
              boxShadow: '0 8px 24px rgba(125, 32, 39, 0.1)', 
              borderTop: '4px solid #7D2027'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Saman & Chathurika" 
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }}
                />
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', color: '#4A4A4A' }}>Saman & Chathurika</h3>
                <p style={{ fontSize: '14px', color: '#7D2027', fontWeight: '500' }}>Galle Wedding</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ color: '#4A4A4A', textAlign: 'center', fontSize: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "The luxury car package was worth every rupee. Our families were impressed and we felt like royalty!"
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#7D2027', fontSize: '20px' }}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ 
        paddingTop: '64px', 
        paddingBottom: '64px', 
        paddingLeft: '24px', 
        paddingRight: '24px', 
        margin: '24px',
        background: 'linear-gradient(135deg, #7D2027 0%, #4A4A4A 100%)', 
        borderRadius: '12px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '16px', 
            color: '#FFFFFF'
          }}>
            Why Choose Ceylon Wedding Cars?
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#F7E7CE', 
            fontSize: '18px', 
            marginBottom: '64px',
            maxWidth: '700px',
            margin: '0 auto 64px auto',
            lineHeight: '1.6'
          }}>
            We understand Sri Lankan wedding traditions and make your special day unforgettable.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div style={{ textAlign: 'center', color: '#FFFFFF' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 24px auto', 
                backgroundColor: '#F7E7CE', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Car size={36} color="#7D2027" strokeWidth={2} />
              </div>
              <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px' }}>Island-wide Fleet</h3>
              <p style={{ fontSize: '16px', color: '#F7E7CE', lineHeight: '1.5' }}>
                From vintage classics to modern luxury cars across all of Sri Lanka
              </p>
            </div>
            
            <div style={{ textAlign: 'center', color: '#FFFFFF' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 24px auto', 
                backgroundColor: '#F7E7CE', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Flower2 size={36} color="#7D2027" strokeWidth={2} />
              </div>
              <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px' }}>Traditional Decoration</h3>
              <p style={{ fontSize: '16px', color: '#F7E7CE', lineHeight: '1.5' }}>
                Beautiful Sri Lankan wedding decorations and floral arrangements
              </p>
            </div>
            
            <div style={{ textAlign: 'center', color: '#FFFFFF' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 24px auto', 
                backgroundColor: '#F7E7CE', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <UserRound size={36} color="#7D2027" strokeWidth={2} />
              </div>
              <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px' }}>Professional Drivers</h3>
              <p style={{ fontSize: '16px', color: '#F7E7CE', lineHeight: '1.5' }}>
                Experienced, well-dressed chauffeurs with wedding expertise
              </p>
            </div>
            
            <div style={{ textAlign: 'center', color: '#FFFFFF' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 24px auto', 
                backgroundColor: '#F7E7CE', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <Wallet size={36} color="#7D2027" strokeWidth={2} />
              </div>
              <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '12px' }}>Affordable Packages</h3>
              <p style={{ fontSize: '16px', color: '#F7E7CE', lineHeight: '1.5' }}>
                Competitive rates with transparent pricing across Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sri Lankan Wedding Locations Section */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px', paddingLeft: '24px', paddingRight: '24px', margin: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '16px',
            color: '#4A4A4A'
          }}>
            We Serve <span style={{ color: '#7D2027' }}>All</span> of Sri Lanka
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#4A4A4A', 
            fontSize: '18px', 
            marginBottom: '64px',
            maxWidth: '700px',
            margin: '0 auto 64px auto',
            lineHeight: '1.6'
          }}>
            From the cultural heart of Kandy to the coastal beauty of Galle - island-wide service
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { city: 'Colombo', desc: 'Commercial Capital', color: '#7D2027' },
              { city: 'Kandy', desc: 'Cultural Capital', color: '#4A4A4A' },
              { city: 'Galle', desc: 'Southern Province', color: '#7D2027' },
              { city: 'Negombo', desc: 'Western Province', color: '#4A4A4A' },
              { city: 'Jaffna', desc: 'Northern Province', color: '#7D2027' },
              { city: 'Anuradhapura', desc: 'Ancient City', color: '#4A4A4A' },
              { city: 'Nuwara Eliya', desc: 'Hill Country', color: '#7D2027' },
              { city: 'Trincomalee', desc: 'Eastern Province', color: '#4A4A4A' }
            ].map((location, index) => (
              <div key={index} style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '24px', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(125, 32, 39, 0.1)', 
                borderLeft: `4px solid ${location.color}`,
                textAlign: 'center'
              }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '18px', color: '#4A4A4A', marginBottom: '4px' }}>
                  {location.city}
                </h3>
                <p style={{ fontSize: '14px', color: '#4A4A4A' }}>{location.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}