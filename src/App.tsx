import React from 'react';
import { useDispatch } from 'react-redux'
import { fetchPosts } from './store/slices/postSlice'
import { loadFavourite } from './store/slices/favouriteSlice'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './pages/Main'
import Post from './pages/Post'
import Favourite from './pages/Favourite'
import NotFounded from './pages/NotFounded'

const App: React.FC = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(loadFavourite())
  }, [])

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/favourite">Избранные</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/favourite">
          <Favourite />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route>
          <NotFounded />
        </Route>
      </Switch>
    </>
  )
}

export default App
