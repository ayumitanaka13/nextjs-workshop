import React from "react";
import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <div>
      <h2>Blog Page</h2>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            backgroundColor: "aqua",
            margin: "4px",
            padding: "4px",
          }}
        >
          <h3>Post ID: {post.id}</h3>
          <h3>Title: {post.id}</h3>
          <Link href={`/posts/${post.title}`}>
            <a className="text-red-500">Read More</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
