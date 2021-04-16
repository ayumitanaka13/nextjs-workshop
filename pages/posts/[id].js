import React from "react";
import Link from "next/link";

const DynamicRoute = ({ post }) => {
  return (
    <div>
      <div
        key={post.id}
        style={{
          backgroundColor: "aqua",
          margin: "4px",
          padding: "4px",
        }}
      >
        <h3>Post ID: {post.id}</h3>
        <h3>Title: {post.title}</h3>
        <p>Description: {post.body}</p>
      </div>
      <Link href="/blog">
        <a className=" bg-gray-300 rounded">Back to blogs</a>
      </Link>
    </div>
  );
};

export default DynamicRoute;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}
