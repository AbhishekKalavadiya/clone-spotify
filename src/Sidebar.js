import React from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { StateProviderValue } from './StateProvider'

import './Sidebar.css'

function Sidebar() {

    const [{ playlists }] = StateProviderValue()

    return (
        <div className='sidebar'>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='Logo Spotify'/>
            
            <SidebarOption title={"Home"} Icon={HomeIcon}/>
            <SidebarOption title={'Search'} Icon={SearchIcon}/>
            <SidebarOption title={'Your Library'} Icon={LibraryMusicIcon}/>
            
            <br />
            <strong>PLAYLISTS</strong>
            <hr/>

            {console.log(playlists)}
            {
                playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))
            }
        </div>
        

    )
}

export default Sidebar
