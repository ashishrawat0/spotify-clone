import React from 'react'
import "./Sidebar.css"
import SideBarOption from './SideBarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
            <SideBarOption Icon={HomeIcon} title="Home"/>
            <SideBarOption Icon={SearchIcon} title="Search"/>
            <SideBarOption Icon={LibraryMusicIcon} title="Your Library"/>
        </div>
    )
}

export default Sidebar
