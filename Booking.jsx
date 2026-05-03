import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: 2200,
      size: "320 sq ft",
      guests: "2 Adults",
      bed: "King Size Bed",
      view: "City View",
      rating: "4.7",
      facilities: "AC, WiFi, Smart TV, Mini Fridge",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Suite Room",
      price: 4500,
      size: "520 sq ft",
      guests: "3 Adults",
      bed: "King Bed",
      view: "Pool View",
      rating: "4.9",
      facilities: "Balcony, Sofa, AC, WiFi, Bathtub",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Single Room",
      price: 1600,
      size: "220 sq ft",
      guests: "1 Adult",
      bed: "Single Bed",
      view: "Garden View",
      rating: "4.5",
      facilities: "Fan, TV, WiFi",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Family Room",
      price: 5200,
      size: "600 sq ft",
      guests: "4 Adults",
      bed: "2 Queen Beds",
      view: "Garden View",
      rating: "4.8",
      facilities: "Dining Space, Kids Area, AC, TV",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <h1 style={{ fontSize: "42px", color: "#0f172a" }}>
          🏨 Choose Your Perfect Room
        </h1>

        <p style={{ color: "#64748b", fontSize: "18px" }}>
          Luxury comfort, premium stay and best prices
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        {rooms.map((room) => (
          <div
            key={room.id}
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            {/* SMALL IMAGE */}
            <img
              src={room.image}
              alt={room.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "22px",
                  color: "#0f172a",
                }}
              >
                {room.name}
              </h2>

              <span
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                ⭐ {room.rating}
              </span>
            </div>

            <h3 style={{ color: "#2563eb" }}>
              ₹{room.price} / Night
            </h3>

            <p>📏 {room.size}</p>
            <p>👥 {room.guests}</p>
            <p>🛏 {room.bed}</p>
            <p>🌅 {room.view}</p>
            <p>✨ {room.facilities}</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginTop: "12px",
              }}
            >
              <input
                type="date"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                }}
              />

              <input
                type="date"
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                }}
              />
            </div>

            <button
              onClick={() => navigate("/payment")}
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "13px",
                border: "none",
                borderRadius: "10px",
                background: "#16a34a",
                color: "white",
                fontWeight: "bold",
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

export default Booking;