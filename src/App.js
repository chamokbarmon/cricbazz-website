import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './Componeds/Blogs/Blogs';
import Home from './Componeds/Homes/Home';
import Statistics from './Componeds/Statistics/Statistics';
import Main from './Layout/Main';



const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children :[
         {
          path:'/',
          element:<Home></Home>
         },
         {
          path:'home',
          element:<Home></Home>
        },
      ]
     
    },
   
    
  
     {
      path:'blog',
      element:<Blogs></Blogs>
      },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    }  
  
  ])
  return (
    <div>
 
    <RouterProvider router={router}></RouterProvider>

      
    </div>
  );
};

export default App;
