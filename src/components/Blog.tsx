import { Link } from "react-router-dom";

export const Blog = () => {
  //TODO:
  //- add sepecific blog post page
  //- add deployment

  const posts = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Second Blog Post" },
  ];
  return (
    <div className="blog-container" id="blog">
      <div className="content-container">
        <h1>
          <span>03.</span>Blog
        </h1>
        <ul className="list">
          <Link to={`/blog/1`}>
            <li className="blog-item">
              <p className="date">10-17-24</p>
              <div className="blog-item-header">
                <p className="blog-header-title">Why Reflection is Important</p>
                <p className="blog-header-subtitle">
                  Why looking backwards can move you forward
                </p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
