import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/posts/new'>New Post</Link>
      <header>
        {
          currentUser ?
            <>
              <p>{currentUser.name}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login / Register</Link>
        }
      </header>
      {props.children}
    </div>
  )
}
