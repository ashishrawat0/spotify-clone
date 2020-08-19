import React from 'react'
import "./Sidebar.css"
import SideBarOption from './SideBarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
            <SideBarOption Icon={HomeIcon} title="Home"/>
            <SideBarOption Icon={SearchIcon} title="Search"/>
            <SideBarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br></br>
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map((playlists)=>{
               return <SideBarOption title={playlists.name}/>
            })}
        </div>
    )
}

export default Sidebar
