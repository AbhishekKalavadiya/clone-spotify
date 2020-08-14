import React from 'react'
import PageviewIcon from '@material-ui/icons/Pageview';
import { Avatar } from '@material-ui/core'
import { StateProviderValue } from './StateProvider'

import './Header.css'

function Header() {

    const [{user}, dispatch] = StateProviderValue()
    return (
        <div className='header'>
            <div className="header__left">
                <PageviewIcon />
                <input 
                    placeholder='Search'
                    type="text"
                />
            </div>

            <div className='header__right'>
                <Avatar src ={user?.images[0]?.url} alt={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    )
}

export default Header
