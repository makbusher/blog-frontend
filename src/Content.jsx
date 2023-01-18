import { useEffect, useState } from 'react';
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { PostsShow } from './PostsShow';
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";


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

  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  const handleUpdatePost = (params, postId) => {
    console.log(postId);
    
    axios.patch(`http://localhost:3000/posts/${postId}.json`, params).then(response => {
      console.log(response.data);
      setPosts(posts.map(post => {
        if (post.id === response.data.id) {
          return response.data;
        } else {
          return post;
        }
      }));
      handleHidePost();
      // window.location.href = '/';
    });
    console.log('updating post...');
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Login />
      <br />
      <hr />
      <LogoutLink />
      <br />
      <hr />
      <PostsNew onCreatePost={handleCreatePost}/>
      <br />
      <hr />
      <Signup />
      <br />
      <hr />
      {/* <button onClick={handleIndexPosts}>Get data</button> */}
      <PostsIndex posts={posts} onSelectPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow onUpdatePost={handleUpdatePost} post={currentPost}/>
      </Modal>
    </div>
  );
}

