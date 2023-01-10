import { useEffect, useState } from 'react' 
import axios from "axios"

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form method="GET">
        <div>
          Title: <input type="text"></input>
        </div>
        <div>
          Body: <input type="text"></input>
        </div>
        <div>
          Image: <input type="text"></input>
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>

      {props['posts'].map(post => (
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <p><img src={post.image}></img></p>
          <p> {post.body} </p>
        </div>
      ))}
      
    </div>
  );
}

function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  }

  useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew />
      <br />
      <br />
      <br />
      <br />
      <button onClick={handleIndexPosts}>Get data</button>
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;