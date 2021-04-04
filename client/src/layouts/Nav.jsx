import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="nav-container">
      <div className="grid-container">
        <div className="title-container">
          <div className="title">A Twitter Clone</div>
          <div className="sub-title">
            Except you can only post as Sopranos Characters
          </div>
        </div>
        <div>
          {currentUser ? (
            <>
              <div className="welcome">Hello, {currentUser.name}</div>
              <>
                <div className="nav-controls">
                  <Link to="/">
                    <button className="nav-buttons">Home</button>
                  </Link>
                  <Link to="/posts/new">
                    <button className="nav-buttons">New Post</button>
                  </Link>
                  <button className="nav-buttons" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </>
            </>
          ) : (
            <Link className="login" to="/login">
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
