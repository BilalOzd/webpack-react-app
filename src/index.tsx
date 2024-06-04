import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../src/layouts/admin.layout';

const App = () => {
    return <>Hello</>;
};

const router = createBrowserRouter(
    [
        {
            path: '/login',
            element: <>Login Page</>
        },
        {
            path: '/',
            element: (
                <>
                <Link to="/login">Login</Link>
            <p>Home Page</p>
            </>
            )
        },
        {
            path: '/admin',
            Component: AdminLayout,
            children: [
                {
                    path: 'users',
                    element: <>users</>
                },
                {
                    path: 'users/:id',
                    element: <>user detail</>
                },
                {
                    path: 'users/search',
                    element: <>user detail</>
                },
                {
                    path: 'roles',
                    element: <>roles</>
                }
            ],
        },
        {
            path: '*',
            element: <>Sayfa Bulunamadı</>
        }
    ]
)
 
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
 
root.render(<RouterProvider router={router}/>);