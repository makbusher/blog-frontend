import { useEffect, useState } from 'react';
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
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
      <PostsIndex posts={posts} onSelectPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <p>{currentPost.body}</p>
      </Modal>
    </div>
  );
}
