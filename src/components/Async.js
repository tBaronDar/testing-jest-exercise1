import { useEffect, useState } from "react";

const Async = () => {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPosts(data);
  //       });
  //   }, []);

  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    setPosts(data);
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
