import { Link } from "react-router-dom";
import "./PostCards.css";

export default function PostCards(props) {
  const {
    posts,
    handleDelete,
    currentUser,
    handleUpvote,
    handleDownvote,
    voted,
    setSortType,
  } = props;

  return (
    <div>
      <div className="selection">
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="date">Date - newest</option>
          <option value="score">Score - highest</option>
        </select>
      </div>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img
            src={post.character.img_url}
            alt="character"
            className="character-image"
          />
            <div className='voting-buttons'>
          {currentUser !== null && (
            <>
              <button
                className={
                  voted.includes(post.id) ? "upvoted" : "post-upvote-button"
                }
                disabled={voted.includes(post.id)}
                onClick={() => handleUpvote(post.id)}
              >
                ⇧
              </button>
            </>
          )}

          {currentUser !== null && (
            <>
              <div className="post-score">{post.score}</div>
              <button
                className={
                  voted.includes(post.id) ? "downvoted" : "post-downvote-button"
                }
                disabled={voted.includes(post.id)}
                onClick={() => handleDownvote(post.id, post.score)}
              >
                ⇩{" "}
              </button>
            </>
          )}
          </div>
          <div className="post-text">
            <div className="post-content">{post.content}</div>
            <div className="post-credits">
              {post.character.name} aka {post.user.name}
            </div>
            <div className="user-controls">
            {currentUser?.id === post.user_id && (
              <>
                <Link to={`/posts/edit/${post.id}`}>
                  <button className="post-edit-button">🖊</button>
                </Link>
                <button
                  className="post-delete-button"
                  onClick={() => handleDelete(post.id)}
                >
                  ❌
                </button>
              </>
            )}
          </div>
          </div>
        </div>
      ))}
      <div className="bottom-border" />
    </div>
  );
}
