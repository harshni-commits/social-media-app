import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data));
  }, []);

  const createPost = async () => {
    await axios.post("http://localhost:5000/api/posts", {
      user: "Admin",
      content
    });
    window.location.reload();
  };

  return (
    <div>
      <h2>Feed</h2>
      <input placeholder="What's on your mind?" onChange={e=>setContent(e.target.value)} />
      <button onClick={createPost}>Post</button>

      {posts.map(p => (
        <div key={p._id}>
          <h4>{p.user}</h4>
          <p>{p.content}</p>
          <button onClick={() => axios.put(`http://localhost:5000/api/posts/like/${p._id}`)}>
            Like ({p.likes})
          </button>
        </div>
      ))}
    </div>
  );
}
