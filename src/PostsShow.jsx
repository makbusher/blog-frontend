export function PostsShow(props) {
  return (
    <div>
      <p>{props.post.body}</p>
      <p>Created: {props.post.created_at}</p>
      <p>Edited: {props.post.updated_at}</p>
    </div>
  );
}
