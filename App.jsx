import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
        
        <nav
          style={{
            background: "linear-gradient(90deg,#0f172a,#1e3a8a)",
            padding: "16px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,.12)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "white",
              fontSize: "30px",
              fontWeight: "800",
              letterSpacing: "1px",
            }}
          >
            🏨 Royal Stay
          </h2>

          <div
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            <NavItem to="/" text="Home" />
            <NavItem to="/booking" text="Rooms" />
            <NavItem to="/login" text="Login" />
            <NavItem to="/register" text="Register" />
            <NavItem to="/payment" text="Payment" />
            <NavItem to="/contact" text="Contact" />
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer
          style={{
            background: "#0f172a",
            color: "#cbd5e1",
            textAlign: "center",
            padding: "18px",
            marginTop: "40px",
            fontSize: "14px",
          }}
        >
          © 2026 Royal Stay Hotel Booking | Luxury • Comfort • Trust
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NavItem({ to, text }) {
  return (
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "700",
        fontSize: "16px",
        padding: "8px 14px",
        borderRadius: "8px",
        transition: "0.3s",
      }}
    >
      {text}
    </Link>
  );
}

export default App;