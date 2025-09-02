import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{ 
      background: 'linear-gradient(90deg, #4A2C2A 0%, #3D2422 50%, #311C1A 100%)', 
      borderBottom: '5px solid #F8F1E9', 
      padding: '12px 20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      color: '#F8F1E9',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Image src="/wedding-logo.png" alt="Ceylon Wedding Cars Logo" width={120} height={40} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px' }}>💒</span>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#F8F1E9' }}>Ceylon Wedding Cars</span>
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '30px', 
        margin: 0, 
        padding: 0,
        alignItems: 'center'
      }}>
        <li>
          <Link href="/" style={{ 
            color: '#F8F1E9', 
            textDecoration: 'none', 
            fontWeight: '500',
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/fleet" style={{ 
            color: '#F8F1E9', 
            textDecoration: 'none', 
            fontWeight: '500',
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}>
            Our Fleet
          </Link>
        </li>
        <li>
          <Link href="/packages" style={{ 
            color: '#F8F1E9', 
            textDecoration: 'none', 
            fontWeight: '500',
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}>
            Wedding Packages
          </Link>
        </li>
        <li>
          <Link href="/gallery" style={{ 
            color: '#F8F1E9', 
            textDecoration: 'none', 
            fontWeight: '500',
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/contact" style={{ 
            color: '#F8F1E9', 
            textDecoration: 'none', 
            fontWeight: '500',
            padding: '8px 12px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}>
            Contact Us
          </Link>
        </li>
      </ul>
      
      {/* Call to Action Button */}
      <div>
        <Link href="/booking" style={{ 
          background: '#4A2C2A', 
          color: '#F8F1E9', 
          padding: '10px 20px', 
          borderRadius: '8px', 
          textDecoration: 'none', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          fontWeight: '600',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <span style={{ fontSize: '16px' }}>💍</span>
          Book Your Wedding Car
        </Link>
      </div>
    </nav>
  );
}