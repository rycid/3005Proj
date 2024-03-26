import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.scss';

import SideBar from './SideBar';

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header>
            <nav>
                {/* <i className="fa-solid fa-bars"></i> */}
                <Link to="/">TrainTide</Link> 
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    side
                </button>
            </nav>
            <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />
        </header>
    );
}

export default Header;