
import Login from "./components/Login";
import Home from './components/Home';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./stores/hooks";
import { setToken } from "./stores/auth";
import { Route, Routes } from "react-router-dom";
import { Details } from "@mui/icons-material";
import TrackDetails from "./components/TrackDetails";
function App() {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.auth)
  useEffect(() => {
    const hash = window.location.hash;
    window.location.hash = "";
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch(setToken(token))
      }
    }
  }, [dispatch, token]);

  return <div>{token ? <Home/>:<Login />}</div>;
}

export default App;
