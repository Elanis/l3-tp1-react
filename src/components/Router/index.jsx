import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Contact from '../Contact';
import Home from '../Home';
import Games from '../Games';
import Layout from '../Layout';

const router = createBrowserRouter([
	{
    element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/games",
				element: <Games />,
			}
		]
	}
]);

export default function Router() {
	return (
		<RouterProvider router={router} />
	);
}