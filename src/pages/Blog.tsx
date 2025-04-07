import BlogList from "../components/BlogList";
import { blogData } from "../data/blogData";

const Blog = () => {
  return (
    <div>
      <BlogList blogs={blogData} />
    </div>
  );
};

export default Blog;