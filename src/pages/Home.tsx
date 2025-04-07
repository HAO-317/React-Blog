import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#f1c40f", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
          alt="Header"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ padding: "20px" }}>
        <h1 style={{ color: "#2c3e50" }}>Welcome to my simple Blog</h1>
        <Link to="/blog">
          <button style={{ padding: "10px 20px", backgroundColor: "#2ecc71", color: "white", border: "none", borderRadius: "5px" }}>
            Go to articles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;