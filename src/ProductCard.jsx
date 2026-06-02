function ProductCard({ name, price }) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>{name}</h2>
      <h3>₹{price}</h3>
    </div>
  );
}

export default ProductCard;
