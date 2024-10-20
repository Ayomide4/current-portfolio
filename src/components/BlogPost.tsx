import { useParams } from "react-router-dom";

import DOMPurify from "dompurify";
import { useState, useEffect } from "react";

function BlogPost() {
  const [content, setContent] = useState("");
  const { id } = useParams(); // Get the blog post ID from the URL

  useEffect(() => {
    fetch("../../public/Why Reflection is Important.html")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })
      .then((html) => {
        // Sanitize the HTML content using DOMPurify
        const sanitizedHTML = DOMPurify.sanitize(html);
        setContent(sanitizedHTML);
      })
      .catch((error) => {
        console.error("Error fetching the HTML:", error);
      });
  }, []);

  return (
    <div className="post-container">
      <div className="post" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default BlogPost;
