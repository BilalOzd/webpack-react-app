import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminLayout from './layouts/admin.layout';
import UsersPage from './pages/admin/users.page';
import UserDetailPage from './pages/admin/user.detail.page';
import ProductsPage from './pages/products/products.page'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
	return <>Hello</>;
};

const router = createBrowserRouter([
	{
		path: '/login',
		element: <>Login Page</>,
	},
    {
		path: '/products',
		element: <ProductsPage/>,
	},
	{
		path: '/',
		element: (
			<>
				<Link to="/login">Login</Link>{' '}
				<Link to="/products">Ürünlerimiz</Link>
				<p>Home Page</p>
			</>
		),
	},
	{
		path: '/admin', // prefix (Nested Routing, Nested Layout)
		Component: AdminLayout,
		children: [
			{
				path: 'users', // /admin/users
				Component: UsersPage,
			},
			{
				path: 'users/:id',
				Component: UserDetailPage,
			},
			{
				path: 'users/search',
				Component: UserDetailPage,
			},
			{
				path: 'roles', // /admin/roles
				element: <>Roles Page</>,
			},
		],
	},
	{
		path: '*',
		element: <>Sayfa Bulunamadı - Geçerli Route Giriniz</>,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);