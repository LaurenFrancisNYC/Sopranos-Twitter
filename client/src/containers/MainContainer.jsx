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
  const [sortType, setSortType] = useState("date");
  const [voted, setVoted] = useState([]);

  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  //sorting
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        date: "id",
        score: "score",
      };
      const sortProperty = types[type];
      const sorted = [...posts].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
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
    setPosts((prevState) => [newPost, ...prevState]);
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
    const updatedPost = await upvotePost(id);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );
    setVoted((prevState) => [...prevState, id]);
  };

  const handleDownvote = async (id, score) => {
    if (score < -10) {
      await handleDelete(id);
      setPosts((prevState) =>
        prevState.filter((post) => {
          return post.id !== Number(id);
        })
      );
    } else {
      const updatedPost = await downvotePost(id);
      setPosts((prevState) =>
        prevState.map((post) => {
          return post.id === Number(id) ? updatedPost : post;
        })
      );
      setVoted((prevState) => [...prevState, id]);
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <Posts
          posts={posts}
          currentUser={currentUser}
          handleDelete={handleDelete}
          handleUpvote={handleUpvote}
          handleDownvote={handleDownvote}
          setSortType={setSortType}
          voted={voted}
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
