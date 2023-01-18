
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
    window.location.href = "/";
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text"></input>
        </div>
        <div>
          Body: <input name="body" type="text"></input>
        </div>
        <div>
          Image: <input name="image" type="text"></input>
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
}
