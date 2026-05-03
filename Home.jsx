import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80') center/cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
          color: "white",
          padding: "40px",
          borderRadius: "25px",
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.30)",
        }}
      >
        <p
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "30px",
            background: "rgba(255,255,255,0.18)",
            fontSize: "14px",
            marginBottom: "18px",
            letterSpacing: "1px",
          }}
        >
          ⭐ Trusted by 10,000+ Guests
        </p>

        <h1
          style={{
            fontSize: "58px",
            marginBottom: "18px",
            fontWeight: "800",
            lineHeight: "1.2",
          }}
        >
          Royal Stay Luxury <br /> Hotel Booking
        </h1>

        <p
          style={{
            fontSize: "21px",
            color: "#f1f5f9",
            maxWidth: "720px",
            margin: "0 auto 30px",
            lineHeight: "1.8",
          }}
        >
          Book premium hotels, luxury rooms, beach resorts and affordable stays
          with secure payment and instant confirmation.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <span style={featureBox}>✔ Free WiFi</span>
          <span style={featureBox}>✔ Best Price</span>
          <span style={featureBox}>✔ 24/7 Support</span>
          <span style={featureBox}>✔ Instant Booking</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/booking")}
            style={{
              padding: "15px 34px",
              border: "none",
              borderRadius: "12px",
              background: "#f59e0b",
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Explore Hotels →
          </button>

          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "15px 34px",
              borderRadius: "12px",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "35px",
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>500+</h2>
            <p style={{ margin: 0 }}>Hotels</p>
          </div>

          <div>
            <h2 style={{ margin: 0 }}>10K+</h2>
            <p style={{ margin: 0 }}>Happy Guests</p>
          </div>

          <div>
            <h2 style={{ margin: 0 }}>24/7</h2>
            <p style={{ margin: 0 }}>Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const featureBox = {
  padding: "10px 16px",
  background: "rgba(255,255,255,0.15)",
  borderRadius: "25px",
  fontSize: "14px",
};

export default Home;