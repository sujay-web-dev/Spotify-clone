import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { gettokenfromurl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi();

function App() {

  // const [token, settoken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // code...
    const hash = gettokenfromurl();
    window.location.hash= "";

    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      



      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        // console.log("Person :-) :-) ...",user);

        dispatch({
          type: "SET_USER",
          user: user,
        })

      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcXiu0P626MGW').then(response => 
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );

    }
    
    // console.log("I am the token --->>>>", hash)

  }, []);

  // console.log("Person :-) :-) ...",user);
  // console.log("token :-) :-) ...",token);

  return (
    <div className="app">
      
      {
        token ?  <Player spotify={spotify} />  :  <Login /> 
      }

    </div>
  );
}

export default App;
