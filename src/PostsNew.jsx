export function PostsNew() {
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
