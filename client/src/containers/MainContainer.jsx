import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  getAllPosts,
  postPost,
  destroyPost,
  putPost,
  upvotePost,
  downvotePost,
} from "../services/posts";
import { getAllCharacters } from "../services/characters";

import Posts from "../screens/Posts";
import PostCreate from "../screens/PostCreate";
import PostEdit from "../screens/PostEdit";

export default function MainContainer(props) {
  const [posts, setPosts] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [sortType, setSortType] = useState('date');

  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, [toggle]);

//sorting
useEffect(() => {
  const sortArray = type => {
    const types = {
      date: "id",
    score: "score",
    };
    const sortProperty = types[type];
    const sorted = [...posts].sort((a, b) => b[sortProperty] - a[sortProperty]);
    setPosts(sorted);
  };
  sortArray(sortType);
}, [sortType]);


  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await getAllCharacters();
      setCharacters(characters);
    };
    fetchCharacters();
  }, []);

  const handleCreate = async (postData, charID) => {
    const newPost = await postPost(postData, charID);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyPost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );
    history.push("/");
  };

//upvotes and downvotes
  const handleUpvote = async (id) => {
    await upvotePost(id);
    setToggle(!toggle);
  };

  const handleDownvote = async (id, score) => {
    await downvotePost(id);
    if (score < -10) {
      handleDelete(id)
    }
    setToggle(!toggle);
  };

  return (
    <Switch>
      <Route path exact="/">
        <Posts
          posts={posts}
          currentUser={currentUser}
          handleDelete={handleDelete}
          handleUpvote={handleUpvote}
          handleDownvote={handleDownvote}
          setSortType={setSortType}
        />
      </Route>
      <Route path="/posts/new">
        <PostCreate handleCreate={handleCreate} characters={characters} />
      </Route>
      <Route path="/posts/edit/:id">
        <PostEdit
          posts={posts}
          handleUpdate={handleUpdate}
          characters={characters}
        />
      </Route>
    </Switch>
  );
}
