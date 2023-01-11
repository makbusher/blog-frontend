export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>

      {props['posts'].map(post => (
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <p><img src={post.image}></img></p>
          <button onClick={() => props.onSelectPost(post)}>More Info</button>
        </div>
      ))}

    </div>
  );
}
