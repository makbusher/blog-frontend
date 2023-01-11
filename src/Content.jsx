import { useEffect, useState } from 'react';
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={handleIndexPosts}>Get data</button> */}
      <PostsIndex posts={posts} />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
