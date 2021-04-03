import { Link } from "react-router-dom";

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <Link to="/">Home</Link>
      <header>
        {currentUser ? (
          <>
            <p>Welcome {currentUser.name}</p>
            <Link to="/posts/new">New Post</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login / Register</Link>
        )}
      </header>
    </div>
  );
}
