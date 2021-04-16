import { useState, useEffect } from "react";
import Link from "next/link";

const Csr = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
      <Link href="/">
        <a className="ml-4 bg-gray-500">Back to Home</a>
      </Link>
      <br />
      {data.map((el) => (
        <>
          <strong>{el.id}</strong>
          <h2>{el.title}</h2>
          <p>{el.body}</p>
        </>
      ))}
    </div>
  );
};

export default Csr;
