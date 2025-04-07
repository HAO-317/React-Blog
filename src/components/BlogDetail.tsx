import { Blog } from "../data/blogData";

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h2
        style={{
          color: "#2c3e50",
          fontSize: "28px",
          marginBottom: "10px",
        }}
      >
        {blog.title}
      </h2>
      <p
        style={{
          color: "#7f8c8d",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        Published on {blog.published_date} by {blog.author}
      </p>
      <img
        src={blog.img_url}
        alt={blog.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <p
        style={{
          color: "#34495e",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        {blog.description}
      </p>
    </div>
  );
};

export default BlogDetail;