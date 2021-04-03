import { Link } from "react-router-dom";

export default function Posts(props) {
  const {
    posts,
    handleDelete,
    currentUser,
    handleUpvote,
    handleDownvote,
    setSortType,
    voted,
  } = props;

  return (
    <div>
      <h1>Posts</h1>

      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="date">Date - newest</option>
        <option value="score">Score - highest</option>
      </select>

      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div>{post.content}</div>
          <div>
            {post.character.name} aka {post.user.name}
          </div>
          <div>{post.score}</div>

          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/edit/${post.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>delete</button>
            </>
          )}

          {currentUser !== null && (
            <>
              <button
                disabled={voted.includes(post.id)}
                onClick={() => handleUpvote(post.id)}
              >
                upvote
              </button>
              <button
                disabled={voted.includes(post.id)}
                onClick={() => handleDownvote(post.id, post.score)}
              >
                downvote
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
