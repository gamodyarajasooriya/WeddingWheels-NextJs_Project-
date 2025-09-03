import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav style={{ 
      background: '#F7E7CE',
      borderBottom: '3px solid #c74852ff', 
      padding: '16px 24px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      boxShadow: '0 2px 8px rgba(125, 32, 39, 0.15)'
    }}>
      {/* Logo Section */}
<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.3px' }}>
    <span style={{ color: 'rgba(66, 15, 20, 1)' }}>Wedding</span>
    <span style={{ color: '#7D2027' }}>Wheels</span>
  </div>
</div>

      
      {/* Navigation Links */}
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '32px', 
        margin: 0, 
        padding: 0,
        alignItems: 'center'
      }}>
        <li>
          <Link href="/" style={{ 
            color: '#7D2027', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '16px',
            padding: '10px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/fleet" style={{ 
            color: '#4A4A4A', 
            textDecoration: 'none', 
            fontWeight: '500',
            fontSize: '16px',
            padding: '10px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}>
            Our Fleet
          </Link>
        </li>
        <li>
          <Link href="/packages" style={{ 
            color: '#4A4A4A', 
            textDecoration: 'none', 
            fontWeight: '500',
            fontSize: '16px',
            padding: '10px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}>
            Wedding Packages
          </Link>
        </li>
        <li>
          <Link href="/gallery" style={{ 
            color: '#4A4A4A', 
            textDecoration: 'none', 
            fontWeight: '500',
            fontSize: '16px',
            padding: '10px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/contact" style={{ 
            color: '#4A4A4A', 
            textDecoration: 'none', 
            fontWeight: '500',
            fontSize: '16px',
            padding: '10px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }}>
            Contact Us
          </Link>
        </li>
      </ul>
      
      {/* Call to Action Button */}
      <div>
        <Link href="/booking" style={{ 
          background: '#7D2027', 
          color: '#FFFFFF', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none', 
          fontWeight: '600',
          fontSize: '16px',
          boxShadow: '0 3px 6px rgba(125, 32, 39, 0.3)',
          transition: 'all 0.3s ease'
        }}>
          Book Your Wedding Car
        </Link>
      </div>
    </nav>
  );
}