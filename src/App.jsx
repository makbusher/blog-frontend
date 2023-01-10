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

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div>
        <h2>A Blog Post About...</h2>
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5F4GSuHQy0X-j9RJpVZfSRuhyTAgrDexOcg&usqp=CAU"></img></p>
        <p> This is a blog post about something, I am not sure what.</p>
      </div>

    </div>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
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