import React from 'react'
import Header from './Header'
import SongRow from './SongRow'
import { StateProviderValue } from './StateProvider'
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './Body.css'

function Body({ spotify }) {

    const [{discover_weekly}, dispatch] = StateProviderValue()

    const playPlaylist = (id) => {
        spotify.play({
            context_uri: `spotify:playlist:030F0XnVbqDZ3ai1Can9U2`,
        })
        .then((res)=> {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type: 'SET_ITEM',
                    item: r.item
                })
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true
                })
            })
        })
    }

    const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div className="body">
            <Header />
            <div className='body__info'>

                <img src={discover_weekly?.images[0]?.url} alt=''/>
                {/* {console.log(discover_weekly)} */}

                <div className='body__infoText'>

                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>

                </div>
            </div>

            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon onClick={playPlaylist} className='body__shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
               
               {discover_weekly?.tracks.items.map(item => (
                   <SongRow playSong={playSong} track={item.track} />
               ))}

            </div>
        </div>
    )
}

export default Body
