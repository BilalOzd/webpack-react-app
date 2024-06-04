// CTRL + ALT + R ile react redux snippet hızlı yazım

import React from 'react';
import {NavLink, Outlet, useLocation, Link, useNavigate} from 'react-router-dom';
import './layout.css';

function AdminLayout(){
const loc = useLocation();
const navigate = useNavigate();
console.log('location', loc)

    return (
      <>
        <nav>
            <Link to="users">Admin Users</Link>{' '}
            <NavLink
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    to="users"
                >
                    Users
                </NavLink>{' '}
            <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    to="roles"
                >
                    Roles</NavLink>{' '}
                    <button
                    onClick={() => {
                        const result = window.confirm(
                            'Yönlenmek istediğinize emin misiniz ?'
                        );
 
                        if (result) {
                            navigate('/login');
                        }
                    }}
                >
                    Use Navigate Sample
                    </button>
        </nav>
        <main>
            <Outlet>
            </Outlet>
            {/* dinaimk olrk içerik değiş yer */}
        </main>
        <footer>
            <p>Alt Bilgi</p>
        </footer>
      </>
    )
}

export default AdminLayout

