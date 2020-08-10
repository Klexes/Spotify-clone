import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>
            <SidebarOptions Icon={HomeIcon} title="Home"/>
            <SidebarOptions Icon={SearchIcon} title="Search"/>
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>
        </div>
    )
}

export default Sidebar
