import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.scss';

import TrainTideIcon from '../icons/TrainTideLogo';

// import SideBar from './SideBar';

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    return (
        <header className={hideHeader ? 'hide' : ''}>
            <nav>
                {/* <i className="fa-solid fa-bars"></i> */}
                <Link to="/">
                    <TrainTideIcon />
                </Link> 
                {/* <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    side
                </button> */}
            </nav>
            {/* <SideBar open={sidebarOpen} setOpen={setSidebarOpen} /> */}
        </header>
    );
}

export default Header;