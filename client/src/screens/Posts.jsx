import PostCards from "../components/PostCards";
import "./Posts.css";

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
      <div className="posts-feed">
        <PostCards
          posts={posts}
          handleDelete={handleDelete}
          currentUser={currentUser}
          handleUpvote={handleUpvote}
          handleDownvote={handleDownvote}
          voted={voted}
          setSortType={setSortType}
        />
      </div>
    </div>
  );
}
