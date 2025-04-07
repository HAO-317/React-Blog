import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "transparent", 
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#2c3e50",
            fontSize: "24px",
            fontWeight: "bold",
            fontStyle: "italic",
            textShadow: "2px 2px 5px lightblue"
          }}
        >
          H317' Super Life
        </Link>
      </div>
      <div>
        <Link
          to="/"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#2c3e50",
            fontSize: "16px",
          }}
        >
          Home
        </Link>
        <Link
          to="/blog"
          style={{
            textDecoration: "none",
            color: "#2c3e50",
            fontSize: "16px",
          }}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;