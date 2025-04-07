import { Link } from "react-router-dom";
import { Blog } from "../data/blogData";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "20px", 
        padding: "20px",
        maxWidth: "1200px", 
        margin: "0 auto", 
      }}
    >
      {blogs.map((blog: Blog) => (
        <div
          key={blog.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={blog.img_url}
            alt={blog.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover", 
              borderRadius: "10px", 
              marginBottom: "10px",
            }}
          />
          <h3
            style={{
              color: "#2c3e50",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            {blog.title}
          </h3>
          <Link to={`/blog/${blog.id}`}>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "transparent",
                border: "2px solid #2ecc71",
                borderRadius: "20px",
                color: "#2ecc71",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2ecc71";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#2ecc71";
              }}
            >
              Read more
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;