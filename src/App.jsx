import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  AboutCeo,
  AboutUs,
  Contact,
  Error,
  HomeLayout,
  Landing,
  Projects,
  Services,
} from './pages';
import { SingleProject } from './components';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path: 'aboutceo',
        element: <AboutCeo />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'projects/:projectid',
        element: <SingleProject />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
