import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { getAllPosts, postPost, destroyPost, putPost} from "../services/posts";
import { getAllCharacters } from "../services/characters";

import Posts from "../screens/Posts";
import PostCreate from "../screens/PostCreate";
import PostEdit from "../screens/PostEdit";


export default function MainContainer(props) {
  const [posts, setPosts] = useState([]);
  const [characters, setCharacters] = useState([]);

  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

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
    setPosts(prevState => prevState.filter(post => post.id !== id))
  }

  const handleUpdate = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setPosts(prevState => prevState.map(post => {
      return post.id === Number(id) ? updatedPost : post
    }))
    history.push('/');
  }

  return (
    <Switch>
      <Route path exact="/">
        <Posts posts={posts} currentUser={currentUser} characters={characters} handleDelete={handleDelete}/>
      </Route>
      <Route path="/posts/new">
        <PostCreate handleCreate={handleCreate} characters={characters}/>
      </Route>
      <Route path="/posts/edit/:id">
        <PostEdit posts={posts} handleUpdate={handleUpdate} characters={characters}/>
      </Route>
    </Switch>
  );
}
