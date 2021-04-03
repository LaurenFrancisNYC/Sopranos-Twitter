import PostCards from "../components/PostCards";

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
      <>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="date">Date - newest</option>
          <option value="score">Score - highest</option>
        </select>
      </>
      <>
        <PostCards
          posts={posts}
          handleDelete={handleDelete}
          currentUser={currentUser}
          handleUpvote={handleUpvote}
          handleDownvote={handleDownvote}
          voted={voted}
        />
      </>
    </div>
  );
}
