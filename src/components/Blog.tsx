import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

export const Blog = () => {
  //TODO:
  //- add metadata like subtitle and date
  //- add deployment

  // const [posts, setPosts] = useState<string[]>();
  // useEffect(() => {
  //   fetch("../../public/posts.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);
  //
  return (
    <div className="blog-container" id="blog">
      <div className="content-container">
        <h1>
          <span>03.</span> Blog
        </h1>
        <ul className="list">
          {/* {posts?.map((post: string, index) => ( */}
          <Link to={`/blog/0`}>
            <li className="blog-item">
              <p className="date">10-17-24</p>{" "}
              {/* You can replace this with the actual date */}
              <div className="blog-item-header">
                <p className="blog-header-title">Why Reflection is Important</p>{" "}
                {/* Use the post title */}
                <p className="blog-header-subtitle">
                  Why looking backwards can move you forward
                </p>
              </div>
            </li>
          </Link>
          {/* ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
