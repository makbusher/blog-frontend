import { useState } from 'react' 

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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "A Blog Post About...",
      body: "This is a blog post about something, I am not sure what.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5F4GSuHQy0X-j9RJpVZfSRuhyTAgrDexOcg&usqp=CAU",
    },
    {
      id: 2,
      title: "This is a second blog post",
      body: "Wow, so cool",
      image: "https://static3.depositphotos.com/1002881/157/i/950/depositphotos_1579477-stock-photo-cool.jpg",
    },
    {
      id: 3,
      title: "I love mac & cheese",
      body: "It is so good!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm_5twf-9HQfBooD4V1sI1RfCmsu_v1ry7g&usqp=CAU",
    },
  ]);

  return (
    <div>
      <PostsNew />
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