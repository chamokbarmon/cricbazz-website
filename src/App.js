import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './Componeds/Blogs/Blogs';
import Home from './Componeds/Homes/Home';
import Statistics from './Componeds/Statistics/Statistics';



const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',element:<div>this is defalt value</div>
    },
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
      path:'/blog',
      element:<Blogs></Blogs>
      }


  ])
  return (
    <div>
 
    <RouterProvider router={router}></RouterProvider>

      
    </div>
  );
};

export default App;
