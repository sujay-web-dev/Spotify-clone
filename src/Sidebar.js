import React, { useState } from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';



function Sidebar() {

    const [{playlists} , dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__sidelogo" src="wlogo.png" alt=""/>
            <SidebarOptions Icon={HomeIcon} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
                <SidebarOptions title={playlist.name} />
            ))}

            {/* <SidebarOptions title="Hip Hop" />
            <SidebarOptions title="Rock" />
            <SidebarOptions title="RnB" /> */}

        </div>
    )
}

export default Sidebar
