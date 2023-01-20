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
import { PostsShowPage } from './PostsShowPage';


export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [isPostsNewVisible, setIsPostsNewVisible] = useState(false);
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

  const handleDestroyPost = (post) => {
    console.log("handleDestroyPost", post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/posts/new" element={ <PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/" element={ <PostsIndex posts={posts} onSelectPost={handleShowPost}/>} />
        <Route path="/posts" element={ <PostsIndex posts={posts} onSelectPost={handleShowPost}/>} />
        <Route path="/posts/:id" element={<PostsShowPage />} />
      </Routes>

      
      <LogoutLink />
      <br />
      <hr />
      <br />
      <hr />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow onDestroyPost={handleDestroyPost} onUpdatePost={handleUpdatePost} post={currentPost}/>
      </Modal>
    </div>
  );
}

