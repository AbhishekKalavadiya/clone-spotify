import React, {useEffect, useState} from 'react'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import LoopIcon from '@material-ui/icons/Loop';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import {Grid, Slider} from '@material-ui/core';
import { StateProviderValue } from './StateProvider';

import './Footer.css'

function Footer({ spotify }) {

    const [{ token, playing, item }, dispatch] = StateProviderValue()

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((res) => {
            console.log(res)

            dispatch({
                type: 'SET_PLAYING',
                playing: res.is_playing
            })

            dispatch({
                type: 'SET_ITEM',
                item: res.item
            })

        })
    }, [spotify])

    const handlePlayPause = () => {
        if(playing) {
            spotify.pause();
            dispatch({
                type:'SET_PLAYING',
                playing: false
            })
        }else {
            spotify.play()
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            })
        }
    }

    const skipNext = () => {
        spotify.skipToNext()
        spotify.getMyCurrentPlayingTrack().then((res) => {
            dispatch({
                type: 'SET_ITEM',
                item: res.item
            })
            dispatch({
                type: 'SET_PLAYING',
                item: true  
            })
        })
    }

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

       console.log(item) 
    return (
        <div className='footer'>

            <div className='footer__left'>
                <img 
                    className='footer_albumLogo'
                    src={item?.album.images[0].url} alt={item?.name} />
                
                { item ?
                    (<div className='footer__songInfo'>
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                    ) : (
                        <div className='footer__songInfo'>
                            <h4> No song playing</h4>
                            <p>...</p>
                        </div>
                    )
                }
               
            </div>

            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon onClick={skipNext} className='footer__icon' />
                {
                    playing ? (
                        <PlayCircleFilledWhiteIcon onClick={handlePlayPause} fontSize='large' className='footer__play' />
                    ) : (
                        <PlayCircleFilledWhiteIcon onClick={handlePlayPause} fontSize='large' className='footer__play' />
                    )
                }
                
                <SkipNextIcon onClick={skipPrevious} className='footer__icon' />
                <LoopIcon className='footer__green' />
            </div>

            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item className='PlaylistPlayIcon'>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item >
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item >
                        <VolumeUpIcon />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
