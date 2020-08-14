import React, {useEffect} from 'react'
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { StateProviderValue } from './StateProvider'

import './App.css';

const spoti = new SpotifyWebApi()

function App() {

	const [{ token, spotify }, dispatch] = StateProviderValue()
		
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";	
		const _token = hash.access_token
		
		if(_token){
			
			dispatch({
				type: 'SET_TOKEN',
				token: _token
			})
			
			spoti.setAccessToken(_token)
			spoti.getMe().then((user)=>{
				dispatch({
					type: 'SET_USER',
					user: user
				})
			})

			dispatch({
				type: "SET_SPOTIFY",
				spotify: spoti,
			  });

			spoti.getMyTopArtists().then((response) => 
				dispatch({
					type: 'SET_TOP_ARTISTS',
					top_artists: response	
				})
			)

			spoti.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists
				})
			})
			
			spoti.getPlaylist('030F0XnVbqDZ3ai1Can9U2').then(response => (
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				})
			))

		}
	}, [token, dispatch])

	console.log(spotify)


	return (
		<div className="app">
			{
				token 
					?<Player  spotify={spoti} /> 
					:<Login />
			}
		</div>
	);
}


export default App;
