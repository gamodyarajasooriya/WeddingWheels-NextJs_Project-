import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#7D2027", color: "white", padding: "50px 24px", margin: "0 24px", borderRadius: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Logo and tagline */}
        <div style={{ flex: "1 1 250px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>
            Wedding<span style={{ color: "#F7E7CE" }}>Wheels</span>
          </h2>
          <p style={{ fontSize: "16px", color: "#F7E7CE", lineHeight: "1.6", marginBottom: "20px" }}>
            Sri Lanka's premier wedding car rental service, creating unforgettable moments for your special day.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#F7E7CE" }}>
            <span style={{ fontSize: "18px", fontWeight: "600" }}>🇱🇰 Serving All of Sri Lanka</span>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 180px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px", color: "#F7E7CE", fontWeight: "600" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2.2" }}>
            <li><Link href="/" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Home</Link></li>
            <li><Link href="/fleet" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Our Fleet</Link></li>
            <li><Link href="/packages" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Wedding Packages</Link></li>
            <li><Link href="/gallery" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Gallery</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div style={{ flex: "1 1 180px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "20px", color: "#F7E7CE", fontWeight: "600" }}>Our Services</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2.2" }}>
            <li><Link href="/vintage-cars" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Vintage Cars</Link></li>
            <li><Link href="/luxury-vehicles" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Luxury Vehicles</Link></li>
            <li><Link href="/bridal-party" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Bridal Party Transport</Link></li>
            <li><Link href="/chauffeur" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Chauffeur Service</Link></li>
            <li><Link href="/decoration" style={{ textDecoration: "none", color: "white", fontSize: "16px", transition: "color 0.3s ease" }}>Car Decoration</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "#F7E7CE" }}>Get In Touch</h3>

          {/* Email Newsletter */}
          <div style={{ marginBottom: "24px" }}>
            <p style={{ fontSize: "14px", marginBottom: "12px", color: "#F7E7CE" }}>Subscribe for wedding car updates</p>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  border: "1px solid #4A4A4A",
                  backgroundColor: "#F7E7CE",
                  color: "#7D2027",
                  borderRadius: "6px 0 0 6px",
                  outline: "none",
                  fontSize: "14px"
                }}
              />
              <button
                style={{
                  backgroundColor: "#4A4A4A",
                  color: "white",
                  border: "none",
                  padding: "0 20px",
                  fontSize: "16px",
                  borderRadius: "0 6px 6px 0",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease"
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Phone */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ 
              width: "24px", 
              height: "24px", 
              backgroundColor: "#F7E7CE", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              marginRight: "12px"
            }}>
              <span style={{ color: "#7D2027", fontSize: "12px" }}>📞</span>
            </div>
            <span style={{ fontSize: "16px" }}>+94 77 123 4567</span>
          </div>

          {/* Email */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ 
              width: "24px", 
              height: "24px", 
              backgroundColor: "#F7E7CE", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              marginRight: "12px"
            }}>
              <span style={{ color: "#7D2027", fontSize: "12px" }}>✉️</span>
            </div>
            <span style={{ fontSize: "16px" }}>info@ceylonweddingcars.lk</span>
          </div>

          {/* Location */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
            <div style={{ 
              width: "24px", 
              height: "24px", 
              backgroundColor: "#F7E7CE", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              marginRight: "12px"
            }}>
              <span style={{ color: "#7D2027", fontSize: "12px" }}>📍</span>
            </div>
            <span style={{ fontSize: "16px" }}>Colombo, Sri Lanka</span>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="https://facebook.com/ceylonweddingcars">
              <div style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#F7E7CE",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}>
                <Image src="/Facebook.png" alt="Facebook" width={24} height={24} />
              </div>
            </Link>

            <Link href="https://instagram.com/ceylonweddingcars">
              <div style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#F7E7CE",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}>
                <Image src="/Instagram.png" alt="Instagram" width={24} height={24} />
              </div>
            </Link>

            <Link href="https://whatsapp.com">
              <div style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#F7E7CE",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}>
                <span style={{ color: "#7D2027", fontSize: "20px" }}>💬</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <hr style={{ margin: "40px 0 20px 0", borderColor: "#4A4A4A", maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }} />
      <p style={{ textAlign: "center", fontSize: "14px", color: "#F7E7CE", maxWidth: "1200px", margin: "0 auto" }}>
        Copyright © 2025 <span style={{ color: "white", fontWeight: "600" }}>Ceylon Wedding Cars</span>. All rights reserved. | 
        <span style={{ margin: "0 8px" }}>•</span>
        Licensed Wedding Car Rental Service in Sri Lanka
      </p>
    </footer>
  );
}