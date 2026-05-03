import HotelCard from "../components/HotelCard";
import { useNavigate } from "react-router-dom";

function Hotels() {
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Luxury Stay",
      price: "₹2500/night",
      location: "Bangalore",
      rating: "4.8 ⭐",
      facility: "Free WiFi, Pool, Breakfast",
    },
    {
      name: "Royal Palace",
      price: "₹4000/night",
      location: "Mysore",
      rating: "4.9 ⭐",
      facility: "Spa, Gym, Luxury Room",
    },
    {
      name: "Ocean View",
      price: "₹3200/night",
      location: "Goa",
      rating: "4.7 ⭐",
      facility: "Beach View, Pool, Dinner",
    },
  ];

  return (
    <div
      style={{
        minHeight: "92vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #06b6d4 100%)",
        padding: "35px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", color: "white", marginBottom: "35px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Available Hotels
        </h1>

        <p style={{ fontSize: "18px", color: "#dbeafe" }}>
          Choose the best hotel for your perfect vacation stay
        </p>
      </div>

      {/* Hotel Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {hotels.map((hotel, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "22px",
              padding: "25px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
              transition: "0.3s",
            }}
          >
            <HotelCard name={hotel.name} price={hotel.price} />

            <p style={{ marginTop: "12px", color: "#374151" }}>
              📍 {hotel.location}
            </p>

            <p style={{ color: "#374151" }}>
              ⭐ Rating: {hotel.rating}
            </p>

            <p style={{ color: "#374151", marginBottom: "18px" }}>
              🏨 {hotel.facility}
            </p>

            <button
              onClick={() => navigate("/booking")}
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "12px",
                background: "#2563eb",
                color: "white",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Book Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;