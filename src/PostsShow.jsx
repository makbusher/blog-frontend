export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    console.log(props.post)
    props.onUpdatePost(params, props.post.id)
  }
  return (
    <div>
      <p>{props.post.body}</p>
      <p>Created: {props.post.created_at}</p>
      <p>Edited: {props.post.updated_at}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" defaultValue={props.post.title} />
        </div>
        <div>
          Body: <input type="text" name="body" defaultValue={props.post.body} />
        </div>
        <div>
          Image: <input type="text" name="image" defaultValue={props.post.image} />
        </div>
        <button type="submit">Update post</button>
      </form>
    </div>
  );
}
