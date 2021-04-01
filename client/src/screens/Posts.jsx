import { useState } from "react";
import { Link } from "react-router-dom";

export default function Posts(props) {
  const { posts, characters, handleDelete, currentUser } = props;

  // (characters.map((character)=> (console.log(character))))

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <>
          <div>{post.content}</div>
          <div>{post.character.name}</div>
          {
              currentUser?.id === post.user_id &&
              <>
                <Link to={`/posts/edit/${post.id}`}><button>Edit</button></Link>
                <button onClick={() => handleDelete(post.id)}>delete</button>
              </>
            }
        </>
      ))}
    </div>
  );
}
