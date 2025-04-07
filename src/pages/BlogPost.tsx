import { useParams } from "react-router-dom";
import BlogDetail from "../components/BlogDetail";
import { blogData, Blog } from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id) : -1;
  const blog: Blog | undefined = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return <div style={{ padding: "20px" }}>Blog not found!</div>;
  }

  return <BlogDetail blog={blog} />;
};

export default BlogPost;