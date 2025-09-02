import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111827", color: "white", padding: "40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "30px" }}>
        
        {/* Logo and tagline */}
        <div style={{ flex: "1 1 200px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Trip<span style={{ color: "#FF5C00" }}>Go</span>
          </h2>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#d1d5db" }}>
            Drive your way,<br /> anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "15px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li><Link href="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></li>
            <li><Link href="/vehicles" style={{ textDecoration: "none", color: "white" }}>Vehicles</Link></li>
            <li><Link href="/about" style={{ textDecoration: "none", color: "white" }}>About Us</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "15px" }}>Support</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li><Link href="/faqs" style={{ textDecoration: "none", color: "white" }}>FAQs</Link></li>
            <li><Link href="/terms" style={{ textDecoration: "none", color: "white" }}>Terms & Conditions</Link></li>
            <li><Link href="/privacy" style={{ textDecoration: "none", color: "white" }}>Privacy Policy</Link></li>
            <li><Link href="/support" style={{ textDecoration: "none", color: "white" }}>Customer Support</Link></li>
          </ul>
        </div>

      {/* Contact */}
<div style={{ flex: "1 1 200px" }}>
  <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>Contact</h3>

  {/* Email input */}
  <div style={{ display: "flex", marginBottom: "20px" }}>
    <input
      type="email"
      placeholder="Email"
      style={{
        flex: 1,
        padding: "10px",
        border: "1px solid #374151",
        backgroundColor: "#1f2937",
        color: "white",
        borderRadius: "6px 0 0 6px",
        outline: "none",
      }}
    />
    <button
      style={{
        backgroundColor: "#d1d5db",
        color: "#111827",
        border: "none",
        padding: "0 15px",
        fontSize: "16px",
        borderRadius: "0 6px 6px 0",
        cursor: "pointer",
      }}
    >
      →
    </button>
  </div>

  {/* Phone */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
    <Image src="/Group 10.png" alt="Phone" width={18} height={18} />
    <span style={{ marginLeft: "10px", fontSize: "15px" }}>+94 71 5672458</span>
  </div>

  {/* Location */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
    <Image src="/Location.png" alt="Location" width={18} height={18} />
    <span style={{ marginLeft: "10px", fontSize: "15px" }}>Colombo, Sri Lanka</span>
  </div>

  {/* Social Icons */}
  <div style={{ display: "flex", gap: "12px" }}>
    <Link href="https://facebook.com">
      <div style={{
        width: "35px",
        height: "35px",
        
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}>
        <Image src="/Facebook.png" alt="Facebook" width={35} height={35} />
      </div>
    </Link>

    <Link href="https://instagram.com">
      <div style={{
        width: "35px",
        height: "35px",
      
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}>
        <Image src="/Instagram.png" alt="Instagram" width={35} height={35} />
      </div>
    </Link>

    <Link href="https://x.com">
      <div style={{
        width: "35px",
        height: "35px",
    
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}>
        <Image src="/X.png" alt="Twitter" width={35} height={35} />
      </div>
    </Link>
  </div>
</div>

      </div>

      {/* Bottom Line */}
      <hr style={{ margin: "30px 0", borderColor: "#374151" }} />
      <p style={{ textAlign: "center", fontSize: "14px", color: "#9CA3AF" }}>
        Copyright © 2025 <span style={{ color: "#FF5C00" }}>TripGo</span>. All rights reserved.
      </p>
    </footer>
  );
}
