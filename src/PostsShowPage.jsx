import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const getPost = () => {
    console.log(params.id);
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then(response => {
      console.log(response.data);
      setPost(response.data);
    });
  };

  useEffect(getPost, []);

  return (
    <div>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p>Image: {post.image}</p>
    </div>
  );
}