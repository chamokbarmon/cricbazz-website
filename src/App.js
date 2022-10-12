import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blogs from './Componeds/Blogs/Blogs';
import Home from './Componeds/Homes/Home';
import QuizDetails from './Componeds/QuizDetails/QuizDetails';
import Statistics from './Componeds/Statistics/Statistics';
import Main from './Layout/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
   
      element:<Main></Main>,
      children :[
         {
          path:'home',
          loader:({params})=> fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Home></Home>
        },
        {
          path:'blog', 
          element:<Blogs></Blogs>
          },
        {
          path:'statistics',
          element:<Statistics></Statistics>
        }, 
       
       
      ]
     
    },
    {
      path:'*', element:<div>This route not found --404</div>
    },
    {
      path:'/product/:nameid',
      loader:async({params}) =>{
        return fetch(` https://openapi.programming-hero.com/api/quiz/${params.nameid}`)
         
      },
      element:<QuizDetails></QuizDetails>
    }
    
  
  ])
  return (
    <div className='app'>
 
    <RouterProvider router={router}></RouterProvider>

      
    </div>
  );
};

export default App;
