import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/SideBar.scss';

const SideBar = ({ open, setOpen }) => {
    return (
        <aside className={open ? 'open' : ''}>
            <div className='menu-toggle' onClick={() => setOpen(!open)}>
                <i className={open ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
            </div>
            <div className='menu'>
                    <NavLink to='/' className='menu-item'>
                        <i className='fa-solid fa-home'></i>
                        <div className='label'>Home</div>
                    </NavLink>
                <NavLink to='/profile' className='menu-item'>
                        <i className='fa-solid fa-user'></i>
                        <div className='label'>Profile</div>
                </NavLink>
                <NavLink to='/schedule' className='menu-item'>
                        <i className='fa-solid fa-calendar-days'></i>
                        <div className='label'>Schedule</div>
                </NavLink>
                <NavLink to='/settings' className='menu-item'>
                        <i className='fa-solid fa-gear'></i>
                        <div className='label'>Settings</div>

                </NavLink>
                <NavLink to='/about' className='menu-item'>
                        <i className='fa-solid fa-circle-info'></i>
                        <div className='label'>About</div>
                </NavLink>
            </div>
            <div className='side-footer'>
                <p>TrainTide v1.0</p>
            </div>
        </aside>
    );
}

export default SideBar;