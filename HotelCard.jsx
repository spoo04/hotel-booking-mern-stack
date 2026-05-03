function HotelCard({ name, price }) {
  return (
    <div style={{
      border:"1px solid gray",
      padding:"15px",
      margin:"10px 0",
      borderRadius:"10px"
    }}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Book Now</button>
    </div>
  );
}

export default HotelCard;