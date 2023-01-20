import {Link} from 'react-router-dom';
import { useState } from 'react';

export function PostsIndex(props) {
  console.log(props);

  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {props.posts.filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase())).map(post => (
        <div className="posts" key={post.id}>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={post.image} className="img-fluid rounded-start" alt="..."></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <button type="button" className="btn btn-dark" onClick={() => props.onSelectPost(post)}>Show Post</button>
                  <Link to={`/posts/${post.id}`}>More Info</Link>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

